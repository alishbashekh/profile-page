export default function PersonalInfoForm() {
  return (
    <div className="bg-(--bg-surface) p-4 space-y-6 rounded-xl">
      <h3 className="text-base font-bold text-(--text-primary) mb-6">
        Personal Information
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            First Name
          </label>
          <input
            type="text"
            defaultValue="John"
            className="w-full bg-(--bg-surface) rounded-xl border border-(--border) text-(--text-primary) px-4 py-2.5 text-sm
                       focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
                       transition-all duration-200"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            Last Name
          </label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full bg-(--bg-surface) rounded-xl border border-(--border) text-(--text-primary) px-4 py-2.5 text-sm
                       focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
                       transition-all duration-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            Email
          </label>
          <input
            type="email"
            defaultValue="john.doe@acmecorp.com"
            className="w-full bg-(--bg-surface) rounded-xl border border-(--border) text-(--text-primary) px-4 py-2.5 text-sm
                       focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
                       transition-all duration-200"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            Phone Number
          </label>
          <input
            type="text"
            defaultValue="+971 50 123 4567"
            className="w-full bg-(--bg-surface) rounded-xl border border-(--border) text-(--text-primary) px-4 py-2.5 text-sm
                       focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
                       transition-all duration-200"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            Designation
          </label>
          <input
            type="text"
            defaultValue="Finance Manager"
            className="w-full bg-(--bg-surface) rounded-xl border border-(--border) text-(--text-primary) px-4 py-2.5 text-sm
                       focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
                       transition-all duration-200"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-(--text-secondary) mb-2">
            Department
          </label>
          <input
            type="text"
            defaultValue="Finance"
            className="w-full bg-(--bg-surface) rounded-xl border border-(--border) text-(--text-primary) px-4 py-2.5 text-sm
                       focus:outline-none focus:ring-2 focus:ring-(--primary) focus:border-(--primary)
                       transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
}
