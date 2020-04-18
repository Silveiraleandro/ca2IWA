var NBA = require('../models/nba');

router.get('/get/html', function(req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    //reading the xml files
    var xml = fs.readFileSync('CA_IWA.xml', 'utf8');
    var xsl = fs.readFileSync('CA_IWA.xsl', 'utf8');
    //parsing xml
    var doc = xmlParse(xml);
    var stylesheet = xmlParse(xsl);
    //performing transformation
    var result = xsltProcess(doc, stylesheet);
    //returning it in String format
    res.end(result.toString());


});
// POST request to add to JSON & XML files
router.post('/post/json', function(req, res) {

  // reading in a JSON file and adding to it & convert to XML
  function appendJSON(obj) {
    //console.log(obj);
    // reading in XML file, converting it to JSON, adding a new object and writing back to XML file
    xmlFileToJs('CA_IWA.xml', function(err, result) {
      if (err) throw (err);
      result.NBA.section[obj.sec_n].entree.push({'player': obj.player, 'value': obj.value, 'team': obj.team});
        //from JSON back to xml
        jsToXmlFile('CA_IWA.xml', result, function(err) {
        if (err) console.log(err);
      })
    })
  }

  // Call appendJSON function and pass in body of the current POST request
  appendJSON(req.body);

  // browser goes back to the page of the POST
  res.redirect('back');

});
// POST request to add to JSON & XML files
router.post('/post/delete', function(req, res) {

  // Function to read in a JSON file, add to it & convert to XML
  function deleteJSON(obj) {
    // reading in XML file, converting it to JSON, deleting the required object and writing back to XML file
    xmlFileToJs('CA_IWA.xml', function(err, result) {
      if (err) throw (err);
      //deleting an object based on the position of the section and position of the entree
      delete result.NBA.section[obj.section].entree[obj.entree];
      //from JSON back our XML file
      jsToXmlFile('CA_IWA.xml', result, function(err) {
        if (err) console.log(err);
      })
    })
  }

  // body of the current POST request
  deleteJSON(req.body);

});