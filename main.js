const app = require('express')();
const { exec } = require('child_process');
const fconfig = require('fs');
var content = " upstream ipmyhouse { server 187.7.154.23:8000 ; } "
const path_config = '/etc/nginx/conf.d/aa-ip-casa.conf'

app.get('/dns-refresh', function (req, res) {
        fconfig.rm(path_config, err => {
            if (err) {
                console.error(err);
                res.send("Erro com a requisição")
            }
        // ficheiro escrito com sucesso
        })

        fconfig.writeFile(path_config, content, err => {
                    if (err) {
                        console.error(err);
                        res.send("Erro com a requisição")
                    }
                // ficheiro escrito com sucesso
                }   
            );

        exec('sudo nginx -s reload', (err, stdout, stderr) => {
            if (err) {
              //some err occurred
              console.error(err)
            } else {
             // the *entire* stdout and stderr (buffered)
             console.log(`stdout: ${stdout}`);
             console.log(`stderr: ${stderr}`);
            }
          });
    
    });

app.listen(8070, () => console.log(`API running on port 8070!`));