// Define an array of menu items with their data
var menuItems = [
    {
      section: "Starters",
      items: [
        {
          title: "Buffalo Chicken Wings",
          description: "Succulent crispy chicken wings tossed in our signature buffalo sauce served with blue cheese dip.",
          price: "€8.99",
          image: "#"
        },
        {
          title: "Seafood Chowder",
          description: "Chunks of fresh irish fish in a thick and creamy soup. Served with homemade sourdough bread.",
          price: "€8.99",
          image: "#"
        },
      ]
    },
    {
      section: "Mains",
      items: [
        {
          title: "8oz Beef Burger",
          description: "A delicious main course that will satisfy your taste buds.",
          price: "€12.99",
          image: "#"
        },
        {
          title: "Crispy Chicken Burger",
          description: "A savory main course with a perfect blend of flavors.",
          price: "€14.99",
          image: "#"
        },
      ]
    },
    {
      section: "Desserts",
      items: [
        {
          title: "Peacan Pie",
          description: "A sweet treat to end your meal on a high note.",
          price: "€5.99",
          image: "#"
        },
        {
          title: "Apple Pie",
          description: "An indulgent dessert to satisfy your sweet cravings.",
          price: "€5.99",
          image: "#"
        },
      ]
    }
  ];
  
  // Function to generate the HTML for menu items
  function generateMenuItems() {
    var menuContainer = document.getElementById("menu-container");
    for (var i = 0; i < menuItems.length; i++) {
      var section = menuItems[i].section;
      var items = menuItems[i].items;
  
      var sectionHTML = `
        <div class="menu-section">
          <h2>${section}</h2>
        </div>
      `;
      menuContainer.innerHTML += sectionHTML;
  
      var sectionContainer = menuContainer.getElementsByClassName("menu-section")[i];
      for (var j = 0; j < items.length; j++) {
        var item = items[j];
        var itemHTML = `
          <div class="menu-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="menu-item-details">
              <h3 class="menu-item-title">${item.title}</h3>
              <p class="menu-item-description">${item.description}</p>
              <p class="menu-item-price">${item.price}</p>
            </div>
          </div>
        `;
        sectionContainer.innerHTML += itemHTML;
      }
    }
  }
  
  // Call the function to generate the menu items when the page loads
  window.onload = generateMenuItems;