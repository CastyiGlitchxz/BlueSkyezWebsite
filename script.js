function IsButton(Color, EqualClass, Typing, TravelURL) {
  if (EqualClass == "SPBTN") {
    Typing = "Side Panel Button"
    
  } else {
    Typing = "Regular Button";
    EqualClass = "No Class";
    Color = "Not Defined";
    TravelURL = "No URL";
  }

  console.log(Color, EqualClass, Typing, TravelURL);
}

