import app from './app'

const port:number = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})