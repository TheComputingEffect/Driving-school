import React from "react";
import { getSubmissions } from "@/backend/formDb";
import { DeleteButton } from "./DeleteButton";

export const dynamic = "force-dynamic";

export default async function SubmissionsPage() {
  const submissions = await getSubmissions();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-heading">Form Submissions</h1>
          <p className="text-sm text-gray-500 mt-1">
            View all enquiries and messages submitted by users through the website.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {submissions.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <p className="font-medium text-gray-600">No submissions found yet.</p>
            <p className="text-xs text-gray-400 mt-1">When a user submits the contact form, it will appear here.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-700 font-semibold">
                <tr>
                  <th className="px-6 py-4 whitespace-nowrap text-xs uppercase tracking-wider">Date &amp; Time</th>
                  <th className="px-6 py-4 whitespace-nowrap text-xs uppercase tracking-wider">User Details</th>
                  <th className="px-6 py-4 whitespace-nowrap text-xs uppercase tracking-wider">Selected Service</th>
                  <th className="px-6 py-4 text-xs uppercase tracking-wider">Message</th>
                  <th className="px-6 py-4 whitespace-nowrap text-right text-xs uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {submissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50 transition-colors align-top">
                    {/* Date and Time */}
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-xs">
                      <span className="font-semibold text-gray-700 block">
                        {new Date(sub.submittedAt).toLocaleDateString()}
                      </span>
                      <span className="text-gray-400 block mt-0.5">
                        {new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </td>
                    
                    {/* User Details */}
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-gray-900 mb-1">{sub.fullName}</div>
                      <div className="flex flex-col gap-0.5 text-xs">
                        <a href={`tel:${sub.phone}`} className="text-brand-blue hover:underline font-semibold">
                          {sub.phone}
                        </a>
                        {sub.email ? (
                          <a href={`mailto:${sub.email}`} className="text-gray-500 hover:underline">
                            {sub.email}
                          </a>
                        ) : (
                          <span className="text-gray-400 italic">No email provided</span>
                        )}
                      </div>
                    </td>

                    {/* Selected Service */}
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">
                        {sub.trainingType || "General Enquiry"}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 flex flex-col gap-0.5">
                        {sub.classTiming && <span>Timing: {sub.classTiming}</span>}
                        {sub.areaLocation && <span>Location: {sub.areaLocation}</span>}
                      </div>
                    </td>

                    {/* Message */}
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs break-words">
                      {sub.message ? (
                        <p className="whitespace-pre-wrap leading-relaxed">{sub.message}</p>
                      ) : (
                        <span className="text-gray-400 italic">No message entered</span>
                      )}
                    </td>

                    {/* Actions */}
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
