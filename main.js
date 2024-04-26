



	const createUserUrl = "https://borjomi.loremipsum.ge/api/register", 
		getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", 
		getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/1 ", 
		updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/1 ", 
		deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/1"; 

	const regForm = document.querySelector("#reg"),
		userName = document.querySelector("#user_name"),
		userSurname = document.querySelector("#user_surname"),
		userEmail = document.querySelector("#user_email"),
		userPhone = document.querySelector("#user_phone"),
		userPersonalID = document.querySelector("#user_personal-id"),
		userZip = document.querySelector("#user_zip-code"),
		userGender = document.querySelector("#user_gender"),
		user_id = document.querySelector("#user_id");

	const userreg = {
		first_name: userName,
		last_name: userSurname,
		phone: userPhone,
		id_number: userPersonalID,
		email: userEmail,
		gender: userGender,
		zip_code: userZip,
	};
    function showSelectedModal(selector) {
        const modal = document.querySelector(selector);
        const closeBtn = modal.querySelector(".modal-close");
        if (modal) {
          modal.classList.add("open");
        }
      
        if (closeBtn) {
          closeBtn.addEventListener("click", () => {
            modal.classList.remove("open");
          });
        }
      }

 const openRegFormBtn = document.querySelector("#open-reg-form");

openRegFormBtn.addEventListener("click", () => {
  showSelectedModal("#reg-modal");
});
const newOne=document.querySelector("new")
function getAllUsers() {
    fetch("https://borjomi.loremipsum.ge/api/all-users")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 1) {
          newOne.innerHTML = data.users;
          const users = data.users;
          renderUsers(users);
        }
      })
      .catch((error) => console.error(error));
  }

  function deleteUser(id) {
    fetch(`http://borjomi.loremipsum.ge/api/delete-user/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getAllUsers(); 
      })
      .catch((error) => {
        console.log(error);
      });
  }

//   didi dro ver davutme tavidan vizam mere chemtvis -__-