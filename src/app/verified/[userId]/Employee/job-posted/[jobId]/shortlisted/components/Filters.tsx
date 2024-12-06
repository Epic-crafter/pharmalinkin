// components/Filters.tsx
"use client";
import { useState } from "react";

const Filters = () => {
  const [assignmentNotSent, setAssignmentNotSent] = useState(false);
  const [interviewNotScheduled, setInterviewNotScheduled] = useState(false);

  return (
    <div className="p-4 bg-white border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <span>Assignment not sent</span>
          <input
            type="checkbox"
            checked={assignmentNotSent}
            onChange={() => setAssignmentNotSent(!assignmentNotSent)}
            className="h-5 w-5"
          />
        </div>

        <div className="flex items-center space-x-4">
          <span>Interview not scheduled</span>
          <input
            type="checkbox"
            checked={interviewNotScheduled}
            onChange={() => setInterviewNotScheduled(!interviewNotScheduled)}
            className="h-5 w-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
