import { cookies } from "next/headers"
import { MainLayout } from "./components/main-layout"


const layout = ({children}:any) => {
    const layout = cookies().get("react-resizable-panels:layout:mail")
    const collapsed = cookies().get("react-resizable-panels:collapsed")
  
    const defaultLayout = layout ? JSON.parse(layout.value) : undefined
    const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined
 

  return (
  <div className="h-screen relative overflow-hidden">
  <MainLayout
   defaultLayout={defaultLayout}
   defaultCollapsed={defaultCollapsed}
   navCollapsedSize={4}
   children={children}
   />
  </div>
  )
}

export default layout