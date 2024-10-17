import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "@/models/user";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@/lib/mongo";
import bcrypt from "bcryptjs"; // Import bcrypt

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Check if email and password are provided
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        // Connect to the database
        await connectToDatabase();

        // Find user by email
        const user = await User.findOne({ email: credentials.email });

        // If user not found, throw error
        if (!user) {
          throw new Error("No user found with the provided email");
        }

        // Compare the provided password with the stored hashed password using bcrypt
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        // If password is invalid, throw error
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        // Return the user details if authentication is successful
        return {
          id: user._id.toString(),
          email: user.email,
          role: user.role,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!, // Add your Google client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // Add your Google client secret
      async profile(profile) {
        // Connect to the database
        await connectToDatabase();

        // Check if the user with the Google email exists in your database
        const user = await User.findOne({ email: profile.email });

        if (!user) {
          throw new Error("User not found");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      // If user exists, attach role to the token
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // Attach role to the session
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id;
      }
      return session;
    },
  },
};
