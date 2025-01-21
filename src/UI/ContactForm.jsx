import { useState } from "react";

export default function ContactForm() {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    mobileNo: "",
    message: "",
    country: "India",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is required.";
    if (!formData.mobileNo.trim()) {
      newErrors.mobileNo = "Mobile Number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNo)) {
      newErrors.mobileNo =
        "Enter a valid Indian mobile number (10 digits starting with 6, 7, 8, or 9).";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.country) newErrors.country = "Country is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getAccessToken = async () => {
    try {
      const params = new URLSearchParams({
        refresh_token:
          "1000.61a6e0908d9ad5312311ec35e3791270.cc1372b6e012b012b19ab8bf8ea9fc99",
        client_id: "1000.6H8GP175CFLHP8TC55NP96PYA0WXSS",
        client_secret: "b0923d6371c9733573ba9df581c64ef2604a739b07",
        grant_type: "refresh_token",
      });

      const response = await fetch(
        `https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.61a6e0908d9ad5312311ec35e3791270.cc1372b6e012b012b19ab8bf8ea9fc99&client_id=1000.6H8GP175CFLHP8TC55NP96PYA0WXSS&client_secret=b0923d6371c9733573ba9df581c64ef2604a739b07&grant_type=refresh_token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to get access token: ${errorData}`);
      }

      const data = await response.json();
      // console.log({ data });

      if (!data.access_token) {
        throw new Error("No access token received from Zoho");
      }

      return data.access_token;
    } catch (error) {
      console.error("Error getting access token:", error);
      throw new Error("Authentication failed. Please try again.");
    }
  };

  const submitToZohoCRM = async () => {
    let accessToken;

    try {
      accessToken = await getAccessToken();

      if (!accessToken) {
        throw new Error("Failed to get access token");
      }

      const leadData = {
        data: [
          {
            Layout: {
              id: "5398357000000091055",
            },
            Lead_Source: "Website",
            Company: formData.companyName,
            Last_Name: formData.lastName,
            First_Name: formData.firstName,
            Phone: formData.mobileNo,
            Email: formData.email,
            Description: formData.message,
            Country: formData.country,
          },
        ],
      };

      const response = await fetch("https://www.zohoapis.com/crm/v7/Leads", {
        method: "POST",
        headers: {
          Authorization: `Zoho-oauthtoken ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Failed to create lead: ${errorData}`);
      }

      const result = await response.json();

      if (
        !result.data ||
        !result.data[0] ||
        result.data[0].status !== "success"
      ) {
        throw new Error("Lead creation was not successful");
      }

      return result;
    } catch (error) {
      console.error("Error in submitToZohoCRM:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // await getAccessToken();
    if (validate()) {
      setIsSubmitting(true);
      try {
        await submitToZohoCRM();
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          mobileNo: "",
          message: "",
          country: "India",
        });
      } catch (error) {
        alert(
          error.message || "Failed to submit form. Please try again later."
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="py-6 px-6 mx-auto max-w-screen-md bg-gray_line rounded-lg shadow-lg">
      <h2 className="mb-6 text-4xl font-extrabold text-center text-blue_text">
        Contact Us
      </h2>
      <p className="mb-6 font-light text-center text-gray_text sm:text-lg">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-row">
          <div className="w-1/2 pr-3">
            <label
              htmlFor="firstName"
              className="block mb-2 text-left text-sm font-medium text-gray_text"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow-sm bg-white border border-gray_line text-gray_text text-sm rounded-lg block w-full p-2.5 focus:ring-blue_950 focus:border-blue_950"
              placeholder="Enter First Name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="w-1/2 pl-3">
            <label
              htmlFor="lastName"
              className="block mb-2 text-left text-sm font-medium text-gray_text"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow-sm bg-white border border-gray_line text-gray_text text-sm rounded-lg block w-full p-2.5 focus:ring-blue_950 focus:border-blue_950"
              placeholder="Enter Last Name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 pr-3">
            <label
              htmlFor="email"
              className="block mb-2 text-left text-sm font-medium text-gray_text"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm bg-white border border-gray_line text-gray_text text-sm rounded-lg block w-full p-2.5 focus:ring-blue_950 focus:border-blue_950"
              placeholder="Enter Email ID"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="w-1/2 pr-3">
            <label
              htmlFor="country"
              className="block mb-2 text-left text-sm font-medium text-gray_text"
            >
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="shadow-sm bg-white border border-gray_line text-gray_text text-sm rounded-lg block w-full p-2.5 focus:ring-blue_950 focus:border-blue_950"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country}</p>
            )}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2 pr-3">
            <label
              htmlFor="companyName"
              className="block mb-2 text-left text-sm font-medium text-gray_text"
            >
              Company
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="shadow-sm bg-white border border-gray_line text-gray_text text-sm rounded-lg block w-full p-2.5 focus:ring-blue_950 focus:border-blue_950"
              placeholder="Enter Company Name"
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm">{errors.companyName}</p>
            )}
          </div>
          <div className="w-1/2 pl-3">
            <label
              htmlFor="mobileNo"
              className="block mb-2 text-left text-sm font-medium text-gray_text"
            >
              Mobile No.
            </label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="shadow-sm bg-white border border-gray_line text-gray_text text-sm rounded-lg block w-full p-2.5 focus:ring-blue_950 focus:border-blue_950"
              placeholder="Enter Mobile Number"
            />
            {errors.mobileNo && (
              <p className="text-red-500 text-sm">{errors.mobileNo}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-left text-sm font-medium text-gray_text"
          >
            Your Message
          </label>
          <textarea
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className="block p-2.5 w-full text-sm text-gray_text bg-white rounded-lg shadow-sm border border-gray_line focus:ring-blue_950 focus:border-blue_950"
            placeholder="Enter Your Query..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 px-6 py-2 text-white bg-blue_950 rounded-lg transition-transform duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
}
