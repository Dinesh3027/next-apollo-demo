
var router = express.Router();


/**
 * This will fetch new resources & pass those down through props
 * @param { number } id number of the records to fetch
 * @param { Function } callback handling function
 * @returns users data as props 
 */
 export async function getServerSideProps(id, callback) {
    // Code that can get the User Records

    // returns data here
    callback();
  }

router.get("/id", (req, res) => {
 getServerSideProps(req.param.id, function (data){
    res.json(data);
 });
});


module.exports = router;