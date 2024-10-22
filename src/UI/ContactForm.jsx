import React, { useEffect } from "react";
import $ from "jquery";

const ContactUsForm = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#webform5398357000000498003").submit(function (e) {
        var ismandatory = checkMandatory5398357000000498003();
        e.preventDefault();
        if (ismandatory) {
          if (typeof _wfa_track !== "undefined" && _wfa_track.wfa_submit) {
            _wfa_track.wfa_submit(e);
          }
          var formData = new FormData(this);
          $.ajax({
            url: "https://crm.zoho.com/crm/WebToLeadForm",
            type: "POST",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
              var splashinfodom = document.getElementById("wf_splash_info");
              splashinfodom.innerText = data.actionvalue;
              var splashdom = document.getElementById("wf_splash");
              document
                .getElementById("webform5398357000000498003")
                .reset.click();
              splashdom.style.display = "";
              setTimeout(function () {
                splashdom.style.display = "none";
              }, 5000);
              document
                .querySelector(".crmWebToEntityForm .formsubmit")
                .removeAttribute("disabled");
            },
            error: function (data) {
              alert("An error occurred");
            },
          });
        }
      });
    });
  }, []);

  const validateEmail5398357000000498003 = (email) => {
    var isEmailValid = true; // Replace with your own validation logic.
    return isEmailValid;
  };

  const checkMandatory5398357000000498003 = () => {
    var lastName = document.getElementById("Last_Name").value;
    if (lastName === "") {
      alert("Name is required");
      return false;
    }
    // Add any other mandatory field checks here.
    return true;
  };

  return (
    <form
      id="webform5398357000000498003"
      name="WebToLeads5398357000000498003"
      acceptCharset="UTF-8"
      className="border border-1 p-10"
    >
      {/* <input
          type="text"
          style={{ display: "none" }}
          name="xnQsjsdp"
          value="500b7393befb5ffdf324cdadc49653f77b2bac8f58f7fe81660ede278fc24d5c"
        /> */}
      {/* <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          style={{ display: "none" }}
          name="xmIwtLD"
          value="3a37c8e2d46b5ddea81d9942ac4fb4bdfb160fa93121f027043e8252b8e7fea71c5e46b063db0ad94708a542ffdbec86"
        /> */}
      {/* <input
          type="text"
          style={{ display: "none" }}
          name="actionType"
          value="TGVhZHM="
        /> */}
      {/* <input
          type="text"
          style={{ display: "none" }}
          name="returnURL"
          value="null"
        /> */}

      <div
        className="font-poppins text-xl font-semibold p-2"
        style={{ maxWidth: "600px", color: "black", fontFamily: "Arial" }}
      >
        Contact US
      </div>

      <div className="my-5 flex">
        <div
          className="ml-2 mr-20"
          style={{ fontSize: "12px", fontFamily: "poppins" }}
        >
          <label htmlFor="Last_Name">
            Name<span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <div className="border border-gray_line">
          <input
            type="text"
            id="Last_Name"
            aria-required="true"
            aria-label="Last Name"
            name="Last Name"
            aria-valuemax="80"
            maxLength="80"
          />
        </div>
      </div>

      <div className="my-5 flex">
        <div
          className="ml-2 mr-20"
          style={{ fontSize: "12px", fontFamily: "poppins" }}
        >
          <label htmlFor="Email">
            Email<span style={{ color: "red" }}>*</span>
          </label>
        </div>
        <div className="border border-gray_line">
          <input
            type="email"
            id="Email"
            aria-required="true"
            aria-label="Email"
            name="Email"
            maxLength="100"
            onBlur={() =>
              validateEmail5398357000000498003(
                document.getElementById("Email").value
              )
            }
          />
        </div>
      </div>
      {/* <div class="my-5 flex">
        <div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
          <label for="Company">Company</label>
        </div>
        <div class="zcwf_col_fld">
          <input
            type="text"
            id="Company"
            aria-required="false"
            aria-label="Company"
            name="Company"
            aria-valuemax="200"
            maxlength="200"
          ></input>
          <div class="zcwf_col_help"></div>
        </div>
      </div> */}

      <div className="my-5 flex">
        <div
          className="ml-2 mr-20"
          style={{ fontSize: "12px", fontFamily: "poppins" }}
        >
          <label htmlFor="Phone">Phone</label>
        </div>
        <div className="border border-gray_line">
          <input
            type="text"
            id="Phone"
            aria-required="false"
            aria-label="Phone"
            name="Phone"
            maxLength="30"
          />
        </div>
      </div>

      <div className="my-5 flex">
        <div
          className="ml-2 mr-16"
          style={{ fontSize: "12px", fontFamily: "poppins" }}
        >
          <label htmlFor="Message">Message</label>
        </div>
        <div className="border border-gray_line">
          <textarea
            id="Message"
            aria-required="false"
            aria-label="Message"
            name="Message"
            maxLength="32000"
          ></textarea>
        </div>
      </div>

      <div className="flex ml-20 px-5 mb-5">
        <input
          type="submit"
          id="formsubmit"
          className="mr-4 ml-10 font-poppins border border-gray_line rounded-md p-1 text-gray_text "
          value="Submit"
          aria-label="Submit"
          title="Submit"
        />
        <input
          type="reset"
          className="font-poppins border border-gray_line rounded-md p-1 text-gray_text "
          name="reset"
          value="Reset"
          aria-label="Reset"
          title="Reset"
        />
      </div>
    </form>
  );
};

export default ContactUsForm;
