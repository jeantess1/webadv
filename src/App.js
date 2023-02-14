
import './App.css';
import { useState } from 'react';

function App() {
  const [produit,setproduit] = useState([]);
  
  
  function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    if(document.getElementById("produit").value!=null){
    var newproduit = document.getElementById("produit").value;
    var newquantité = document.getElementById("quantité").value;
    
    //setproduit(produit.push(newproduit))
    console.log(produit)
    }

    else{
      console.log("no value")
      
    }
    // Afficher la valeur
    
  }
  function list()
  {
    
    var prod=[{name:"lait",qte:"1"}]
    var newprod=document.getElementById("produit").value;
    var newqte= document.getElementById("quantité").value
    var num=-1
    for( let i =0 ; i< produit.length;i++){
      if(newprod.toLowerCase()===produit[i].name)
      {
        num=i
        
      }
    }
    if(num!==-1)
    {
      produit[num].qte=newqte
    }
    else{
      produit.push({name:newprod.toLowerCase(),qte:newqte})
    }
    console.log(newprod.toLowerCase())
    
    console.log(" success ? ",produit[0].name)
    displaylist()
  }


  function displaylist()
  {
    console.log("start display list")
    var a = "<div>"
    console.log(produit.length)
    for( let i =0 ; i< produit.length;i++){
      
      a+=produit[i].name + ": "+ produit[i].qte + "</div> <div>" 
    }
    
    console.log(a)
    document.getElementById("élément liste").innerHTML=a
    return a
  }
   
  


  return (
    <div className="ListeCourse">
      <p>Produit</p>
      <input type='text' id='produit'></input>
      <p>Quantité</p>
      <input type='number' id='quantité'></input>
      <button type="button" onClick={list}>Ajouter ce produit</button>
      
      <div id="élément liste"></div>
      <div id="displayAPI">{}</div>

    </div>
  );
  
  
}


export default App;
