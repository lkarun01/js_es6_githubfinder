// Search Input
const searchUser = document.getElementById('searchUser');

const github = new GitHub;
const ui = new UI;

// Seach input event listner
searchUser.addEventListener('keyup', (e) => {
    // Get input test
    const userText = e.target.value;

    if(userText !== ''){
        //console.log(userText);
        // Make Http call
        github.getUser(userText)
            .then(data => {
                //console.log(data);
                if(data.profile.message === 'Not Found'){
                    // Show alert
                    ui.showAlert('User Not found','alert alert-danger');
                }else{
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    }else{
        // Clear Profile
        ui.clearProfile();
    }
});