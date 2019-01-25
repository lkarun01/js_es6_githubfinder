class GitHub{

    constructor(){
        this.client_id = '09ad2e516049ea3d0b4c';
        this.client_secret = '77214e674a27ab5caa7dd1257e86efbb7ebdf7f3';
        this.repos_count = 6;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&
                                client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponce.json();
        const repos = await reposResponce.json();

        return {
            profile,
            repos
        }

    }
}