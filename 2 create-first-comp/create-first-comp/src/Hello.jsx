function Hello(){
  let myName = "Asif";
  const number = 456;
  let fullName =  () => {
    return "Asif Ali";
  }
  return <p> Message no {number}. I am {fullName()}. This is a React JS Course.</p>
}

export default Hello;