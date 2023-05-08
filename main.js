const app = require('express')();
const fconfig = require('fs');
var content = " upstream ipmyhouse { server 187.7.154.23:8000 ; } "
const path_config = '/etc/nginx/conf.d/aa-ip-casa.conf'
app.get('/dns-refresh', (req, res) => 
    
        fconfig.writeFile(path_config, content, err => {
                    if (err) {
                        console.error(err);
                        res.send("Erro com a requisição")
                    }
                // ficheiro escrito com sucesso
                }   
            )
    
    );

app.listen(8070, () => console.log(`API running on port 8070!`));