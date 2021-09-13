module.exports.callback = async (event) => {
  console.log(JSON.stringify(event))
  return { statusCode: 200 }
}
