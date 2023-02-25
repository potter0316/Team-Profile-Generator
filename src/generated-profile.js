generateManager = (manager) => {mbers
    return `
    <div>
        <div>
            <p>Manager</p>
        </div>

        <div>
            <h5>${manager.name}</h5>
            <p>
            <p class="id">ID:${manager.id}</p>
            <p class="email">Email:<ahref="mailto:${manager.email}">${manager.email}</a></p>
            </p>
        </div>
    </div>
    `
}

// Engineer card
generateEngineer = (Engineer) => {
    return `
    <div>
        <div>
            <p>Engineer</p>
        </div>
        
        <div>
            <h5>${Engineer.name}</h5>
            <p>
            <p>ID: ${Engineer.id}</p>
            <p class="email>Email:<ahref="mailto:${Engineer.email}">${engineer.email}</a?></p>
            <p class="github">Github:<ahref="https://github.com/${engineer.github}"</a></p>
            </p>
            </div>
            `
};

// intern card
generateIntern = (intern) => {
    return `
    <div>
        <div>
            <p>Intern</p>
        </div>
        
        <div>
            <h5>${intern.name}</h5>
            <p>
            <p>ID: ${intern.id}</p>
            <p class="email>Email:<ahref="mailto:${intern.email}">${intern.email}</a?></p>
            <p class="github">Github:<ahref="https://github.com/${intern.github}"</a></p>
            </p>
            </div>
            `
};

generateHTML = (data) => {
    
}
        