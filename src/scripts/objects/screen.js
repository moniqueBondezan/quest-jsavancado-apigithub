const screen = {
    userProfile: document.querySelector('.profile-data'),

    renderUser(user){
    this.userProfile.innerHTML = `<div class="info">
                        <img src ="${user.avatarUrl}" alt="Foto do perfil do usuário" />

                        <div class="data">
                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>

                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>

                            <div class="section follow">
                            <p>Seguidores: ${user.userFollowers} </p>
                            <p>Seguindo: ${user.userFollowing} </p>
                            </div>

                        </div>
                    </div>`

        let eventsItems = '';
        user.events.forEach((event) => {
            if(event.payload.commits){
            eventsItems += `<li class="text">
            ${event.repo.name}
            <span class="text-light">
            ${event.payload.commits[0].message}
            </span>
            </li>`
            }
        })

        this.userProfile.innerHTML += `
        <div class="section-event">
        <h2> Últimas Atualizações </h2>
        <ul>${eventsItems}</ul>
        </div>`

        let repositoriesItems = ''
        user.repositories.forEach(repo => repositoriesItems +=
            `<li>
                <a href="${repo.html_url}" target= "_blank">${repo.name}>

                    <div class="container-repo-square">

                <p class="repo-square">
                    <span>🍴</span> <span>${repo.forks}</span>
                </p>

                <p class="repo-square">
                    <span>⭐</span> <span>${repo.stargazers_count}</span>
                </p>
                
                <p class="repo-square"> 
                    <span>👀</span> <span>${repo.watchers}</span>
                </p>

                <p class="repo-square"> 
                    <span>☕</span> <span>${repo.language}</span>
                </p>

                    </div>
                </a>
            </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `
            <div class= "repositories section">
                <h2>Repositórios</h2>
                    <ul>${repositoriesItems}</ul>
            </div>`
        }
    },

    renderNotFound(){ 
        this.userProfile.innerHTML = "<h3> Usuário não encontrado</h3>"
    }

}


export { screen }

