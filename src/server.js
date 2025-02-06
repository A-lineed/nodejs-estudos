import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))

    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'Aline Edvania',
            email: 'aline@gmail.com',
        })  

        return res.end('Usuário criado')
    }
    
    return res.end('Hello Wolrd')

})

server.listen(3333)