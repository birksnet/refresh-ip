const app = require('express')();
const fconfig = require('fs');
var content = "   upstream ipmyhouse { mhouse 187.7.154.23:8000 ; }"

app.get('/dns-refresh', (req, res) => 
    fconfig.writeFile('/etc/nginx/conf.d/aa-ip-casa.conf', content, err => {
                if (err) {
                console.error(err);
                res.send("Erro com a requisição")
                }
            // ficheiro escrito com sucesso
            }   
        )
    );

app.listen(80, () => console.log(`API running on port 80!`));