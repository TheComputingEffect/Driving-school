import React from "react";
import { getSubmissions } from "@/backend/formDb";
import { DeleteButton } from "./DeleteButton";

export const dynamic = "force-dynamic";

export default async function SubmissionsPage() {
  const submissions = await getSubmissions();

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-heading">Form Submissions</h1>
          <p className="text-sm text-gray-500 mt-1">
            View all inquiries and submissions from the website.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        {submissions.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <p>No submissions found yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                <tr>
                  <th className="px-6 py-4 whitespace-nowrap">Date</th>
                  <th className="px-6 py-4 whitespace-nowrap">Name</th>
                  <th className="px-6 py-4 whitespace-nowrap">Contact</th>
                  <th className="px-6 py-4 whitespace-nowrap">Course & Timing</th>
                  <th className="px-6 py-4 whitespace-nowrap">Location</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {submissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50 transition-colors align-top">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {new Date(sub.submittedAt).toLocaleDateString()}<br />
                      <span className="text-xs">{new Date(sub.submittedAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {sub.fullName}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${sub.phone}`} className="text-brand-blue hover:underline">{sub.phone}</a>
                        {sub.email && (
                          <a href={`mailto:${sub.email}`} className="text-gray-500 hover:underline">{sub.email}</a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-900">{sub.trainingType}</span>
                      <br />
                      <span className="text-gray-500">{sub.classTiming}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{sub.areaLocation}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <DeleteButton id={sub.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
