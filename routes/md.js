module.exports = function(app, mysqlClient){
    app.get('/md',function(req, res){
      mysqlClient.query('select * from md', function(error, result){
        (error) ? console.log(error) : res.json(result);
      })
    });

    app.get('/md/:index', function(req, res){
      mysqlClient.query('select * from md where id=?', [req.params.index], function(error, result){
        (error) ? console.log(error) : res.json(result[0]);
      })
    });

    app.post('/md', function(req, res){
        console.log(req.body);
      mysqlClient.query('insert into md(title, content) values(?,?)', [req.body.title, req.body.content], function(error, result){
        (error) ? console.log(error) : res.json(result);
      })
    });

    app.delete('/md/:index', function(req, res){
      mysqlClient.query('delete from md where id = ?', [req.params.index], function(error, result){
        (error) ? console.log(error) : res.json(result);
      })
    });
}
