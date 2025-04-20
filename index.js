// Code your solutions in this file
function writeCards(names, event) {
    const messages = []; // Step 1: Create a new empty array
  
    for (let i = 0; i < names.length; i++) { // Step 2: Loop through the array
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; // Step 3: Create the message
      messages.push(message); // Step 4: Add it to the array
    }
  
    return messages; // Step 5: Return the array
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrease the number each loop
    }
  }
  
  let books=['Eloquent JavaScript','JavaScript: the good parts',' Learn JawaScript Visually','you don\'t know js','JavaScript: The definitive Guid']
  
  let oneBook={
    title: 'Eloquent JavaScript',
    author: 'Mari in Havebeke',
    publisher: ' No strch  Press'
  }


  function loopThrowBook(books){
    for(let i=0; i<books.length; i++)
        console.log(books[i])
  }

  loopThrowBook(books)

  function loopThrowofbook(obj) {
    for(let book in books)
        console.log(book)
  }

  loopThrowofbook(books)

  function loopThrowobj(obj) {
    for(let key in obj) {
        console.log(key)
        console.log(obj[key])
    }
  }
  loopThrowobj(oneBook)
