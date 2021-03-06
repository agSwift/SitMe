const template = `
<!DOCTYPE html>
<html>
<head>
    <mate charest="utf-8" />
</head>

<body style="text-align: center; align-content: center;">
    {{#each seats}}
    <div style="border: 5px solid black; 
      height: 97%; margin: 0 0 7% 0; padding: 0;">
        <h2>Scan Me To Book This Seat</h2>
        <img style="width:80vw; margin: auto 10vw;
         padding: 0;" src={{this.code}} />
        <h4>Or Visit: https://imperial-drp-sit-me.web.app and enter code:</h4>
        <h1 style="width:80vw; margin: auto 10vw; padding: 0; 
        font-size: 300%;"><b>{{this.id}}</b></h1>
        <br />
        <br />
    </div>
    {{/each}}
</body>

</html>
`;

module.exports = template;
