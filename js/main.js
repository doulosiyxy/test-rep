// JSON array
/*var product = [
  {
    "name": "Smooth Tidytips",
    "image": {
      "url": "https://picsum.photos/400/250?image=919",
      "name": "ultrices vel augue vestibulum"
    },
    "price": "£69.87",
    "url": "products/0",
    "popularity": 27
  },
  {
    "name": "Cornflag",
    "image": {
      "url": "https://picsum.photos/400/250?image=962",
      "name": "id consequat in consequat ut nulla sed accumsan"
    },
    "price": "£82.37",
    "url": "products/1",
    "popularity": 77
  },
  {
    "name": "Biannual Lettuce",
    "image": {
      "url": "https://picsum.photos/400/250?image=921",
      "name": "ac leo pellentesque ultrices mattis odio donec vitae nisi"
    },
    "price": "£37.96",
    "url": "products/2",
    "popularity": 56
  },
  {
    "name": "Lapoint Beardtongue",
    "image": {
      "url": "https://picsum.photos/400/250?image=922",
      "name": "dapibus augue vel"
    },
    "price": "£61.70",
    "url": "products/3",
    "popularity": 6
  },
  {
    "name": "Peltate Annual Montane Rockcap Fern",
    "image": {
      "url": "https://picsum.photos/400/250?image=923",
      "name": "urna ut tellus nulla ut erat id mauris vulputate elementum"
    },
    "price": "£97.98",
    "url": "products/4",
    "popularity": 61
  },
  {
    "name": "Brunswickgrass",
    "image": {
      "url": "https://picsum.photos/400/250?image=924",
      "name": "ridiculus mus vivamus vestibulum sagittis"
    },
    "price": "£58.65",
    "url": "products/5",
    "popularity": 16
  },
  {
    "name": "Pohlia Moss",
    "image": {
      "url": "https://picsum.photos/400/250?image=925",
      "name": "sociis natoque penatibus"
    },
    "price": "£117.60",
    "url": "products/6",
    "popularity": 78
  },
  {
    "name": "Maidenhair Creeper",
    "image": {
      "url": "https://picsum.photos/400/250?image=926",
      "name": "urna ut tellus nulla ut erat id mauris vulputate elementum"
    },
    "price": "£79.18",
    "url": "products/7",
    "popularity": 3
  },
  {
    "name": "Elegant Zinnia",
    "image": {
      "url": "https://picsum.photos/400/250?image=927",
      "name": "pede venenatis non sodales sed tincidunt"
    },
    "price": "£87.65",
    "url": "products/8",
    "popularity": 32
  },
  {
    "name": "Haresfoot Locoweed",
    "image": {
      "url": "https://picsum.photos/400/250?image=928",
      "name": "platea dictumst etiam faucibus cursus urna ut tellus nulla"
    },
    "price": "£37.26",
    "promotion": "On sale",
    "url": "products/9",
    "popularity": 9
  },
  {
    "name": "Sand Grape",
    "image": {
      "url": "https://picsum.photos/400/250?image=929",
      "name": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia"
    },
    "price": "£116.14",
    "url": "products/10",
    "popularity": 18
  },
  {
    "name": "Hawai'i Bentgrass",
    "image": {
      "url": "https://picsum.photos/400/250?image=930",
      "name": "feugiat non pretium quis lectus suspendisse potenti in eleifend"
    },
    "price": "£42.14",
    "url": "products/11",
    "popularity": 13
  },
  {
    "name": "Kauai Yellow Loosestrife",
    "image": {
      "url": "https://picsum.photos/400/250?image=931",
      "name": "justo sit amet sapien dignissim vestibulum vestibulum"
    },
    "price": "£85.29",
    "promotion": "Clearance",
    "url": "products/12",
    "popularity": 89
  },
  {
    "name": "Whiteworm Lichen",
    "image": {
      "url": "https://picsum.photos/400/250?image=932",
      "name": "porttitor id consequat in"
    },
    "price": "£68.25",
    "url": "products/13",
    "popularity": 69
  },
  {
    "name": "Cold Brachythecium Moss",
    "image": {
      "url": "https://picsum.photos/400/250?image=933",
      "name": "in magna bibendum imperdiet nullam orci pede venenatis non sodales"
    },
    "price": "£32.45",
    "url": "products/14",
    "popularity": 30
  },
  {
    "name": "Owyhee Milkvetch",
    "image": {
      "url": "https://picsum.photos/400/250?image=962	",
      "name": "aliquam convallis nunc proin at turpis a pede posuere"
    },
    "price": "£48.76",
    "url": "products/15",
    "popularity": 86
  },
  {
    "name": "New Mexico Rockdaisy",
    "image": {
      "url": "https://picsum.photos/400/250?image=935",
      "name": "turpis adipiscing lorem vitae"
    },
    "price": "£35.24",
    "url": "products/16",
    "popularity": 24
  },
  {
    "name": "Woolly Goat Chicory",
    "image": {
      "url": "https://picsum.photos/400/250?image=936",
      "name": "tortor id nulla ultrices aliquet maecenas leo odio condimentum id"
    },
    "price": "£57.45",
    "url": "products/17",
    "popularity": 16
  },
  {
    "name": "Hartz's Bluegrass",
    "image": {
      "url": "https://picsum.photos/400/250?image=937",
      "name": "amet erat nulla tempus vivamus in felis"
    },
    "price": "£49.43",
    "url": "products/18",
    "popularity": 25
  },
  {
    "name": "Striped Rosemallow",
    "image": {
      "url": "https://picsum.photos/400/250?image=938",
      "name": "a pede posuere nonummy"
    },
    "price": "£71.31",
    "url": "products/19",
    "popularity": 45
  },
  {
    "name": "Red Turtlehead",
    "image": {
      "url": "https://picsum.photos/400/250?image=939",
      "name": "nullam porttitor lacus at turpis donec posuere metus vitae"
    },
    "price": "£37.69",
    "url": "products/20",
    "popularity": 90
  },
  {
    "name": "Bunge's Pine",
    "image": {
      "url": "https://picsum.photos/400/250?image=940",
      "name": "platea dictumst etiam faucibus cursus urna ut tellus nulla ut"
    },
    "price": "£31.90",
    "url": "products/21",
    "popularity": 24
  },
  {
    "name": "Texas Wedgescale",
    "image": {
      "url": "https://picsum.photos/400/250?image=941",
      "name": "dui vel sem sed"
    },
    "price": "£30.46",
    "url": "products/22",
    "popularity": 77
  },
  {
    "name": "Sticky Phacelia",
    "image": {
      "url": "https://picsum.photos/400/250?image=942",
      "name": "at velit eu est congue elementum"
    },
    "price": "£47.53",
    "url": "products/23",
    "popularity": 80
  },
  {
    "name": "Horn's Milkvetch",
    "image": {
      "url": "https://picsum.photos/400/250?image=943",
      "name": "ut ultrices vel augue vestibulum"
    },
    "price": "£37.64",
    "url": "products/24",
    "popularity": 68
  },
  {
    "name": "Annual Toothleaf",
    "image": {
      "url": "https://picsum.photos/400/250?image=944",
      "name": "at turpis a pede posuere nonummy integer non velit"
    },
    "price": "£30.73",
    "url": "products/25",
    "popularity": 14
  },
  {
    "name": "Peltate Dutchman's Pipe",
    "image": {
      "url": "https://picsum.photos/400/250?image=945",
      "name": "odio donec vitae nisi nam ultrices libero"
    },
    "price": "£13.55",
    "url": "products/26",
    "popularity": 36
  },
  {
    "name": "Dwarf Birch",
    "image": {
      "url": "https://picsum.photos/400/250?image=946",
      "name": "odio curabitur convallis duis consequat dui nec nisi volutpat"
    },
    "price": "£104.46",
    "url": "products/27",
    "popularity": 7
  },
  {
    "name": "Tiehm's Blazing Star",
    "image": {
      "url": "https://picsum.photos/400/250?image=947",
      "name": "aliquam erat volutpat in"
    },
    "price": "£114.91",
    "url": "products/28",
    "popularity": 65
  },
  {
    "name": "Largeflower Triteleia",
    "image": {
      "url": "https://picsum.photos/400/250?image=948",
      "name": "consequat lectus in est risus"
    },
    "price": "£16.65",
    "url": "products/29",
    "popularity": 73
  },
  {
    "name": "Hoary Mock Orange",
    "image": {
      "url": "https://picsum.photos/400/250?image=949",
      "name": "est phasellus sit"
    },
    "price": "£45.23",
    "url": "products/30",
    "popularity": 35
  },
  {
    "name": "Hill's Pondweed",
    "image": {
      "url": "https://picsum.photos/400/250?image=950",
      "name": "aliquet ultrices erat tortor sollicitudin mi"
    },
    "price": "£111.39",
    "url": "products/31",
    "popularity": 77
  },
  {
    "name": "Waianae Range Cheesewood",
    "image": {
      "url": "https://picsum.photos/400/250?image=951",
      "name": "dolor quis odio consequat varius integer ac leo pellentesque ultrices"
    },
    "price": "£76.54",
    "url": "products/32",
    "popularity": 75
  },
  {
    "name": "Water-gum",
    "image": {
      "url": "https://picsum.photos/400/250?image=952",
      "name": "imperdiet sapien urna pretium nisl"
    },
    "price": "£83.41",
    "url": "products/33",
    "popularity": 82
  },
  {
    "name": "Bishop Pine",
    "image": {
      "url": "https://picsum.photos/400/250?image=953",
      "name": "posuere felis sed lacus morbi sem"
    },
    "price": "£63.86",
    "url": "products/34",
    "popularity": 84
  },
  {
    "name": "Cornish Heath",
    "image": {
      "url": "https://picsum.photos/400/250?image=954",
      "name": "nibh ligula nec sem duis aliquam"
    },
    "price": "£23.15",
    "url": "products/35",
    "popularity": 70
  },
  {
    "name": "Fringedfern",
    "image": {
      "url": "https://picsum.photos/400/250?image=955",
      "name": "pulvinar nulla pede ullamcorper augue a suscipit nulla"
    },
    "price": "£17.64",
    "url": "products/36",
    "popularity": 32
  },
  {
    "name": "Balsam Fir",
    "image": {
      "url": "https://picsum.photos/400/250?image=964",
      "name": "diam in magna bibendum imperdiet nullam orci"
    },
    "price": "£61.63",
    "url": "products/37",
    "popularity": 51
  },
  {
    "name": "Desert Aspicilia",
    "image": {
      "url": "https://picsum.photos/400/250?image=957",
      "name": "a pede posuere"
    },
    "price": "£113.38",
    "url": "products/38",
    "popularity": 83
  },
  {
    "name": "Pringle's Lipfern",
    "image": {
      "url": "https://picsum.photos/400/250?image=958",
      "name": "tellus nulla ut erat id mauris vulputate"
    },
    "price": "£25.27",
    "url": "products/39",
    "popularity": 90
  },
  {
    "name": "Gambel Oak",
    "image": {
      "url": "https://picsum.photos/400/250?image=959",
      "name": "varius nulla facilisi cras non velit nec nisi vulputate"
    },
    "price": "£21.14",
    "url": "products/40",
    "popularity": 7
  },
  {
    "name": "Cara De Caballo",
    "image": {
      "url": "https://picsum.photos/400/250?image=960",
      "name": "erat id mauris"
    },
    "price": "£31.82",
    "promotion": "On sale",
    "url": "products/41",
    "popularity": 83
  },
  {
    "name": "Cottonheads",
    "image": {
      "url": "https://picsum.photos/400/250?image=961",
      "name": "enim blandit mi in porttitor pede"
    },
    "price": "£38.98",
    "url": "products/42",
    "popularity": 40
  }
];*/

$.getJSON('product-data.json', function (data) {
  console.log('success');
});

//inital promotion tab function 
/*function promotionTab(sale) {
  var promo = sale;
  if (promo === "On sale") {
    return 'block'
  } else if (promo === "Clearance") {
    return 'block'  
  } else {
    return 'none'
  }
}*/
//condensed promotion tab function 
function promotionTab(sale) {
  var promo = sale;
  if (promo) {
    return 'block'
  } else {
    return 'none'
  }
}

// sort functions
function pop(a, b) {
  return (a.popularity - b.popularity);
}

function asc(a, b) {
  return (a.price.substr(1) - b.price.substr(1));
}

function des(a, b) {
  return (b.price.substr(1) - a.price.substr(1));
}

$('#popularity').on('click', function() {
  product = product.sort(pop).reverse();
  $('.dropdown-toggle').text('Popularity');
  document.getElementById('products-row').innerHTML = `
  ${product.map(productTemplate).join('')}
  `
});

$('#price-ascending').on('click', function() {
  product = product.sort(asc);
  $('.dropdown-toggle').text('Price ascending');
  document.getElementById('products-row').innerHTML = `
  ${product.map(productTemplate).join('')} 
 `
});

$('#price-descending').on('click', function() {
  product = product.sort(des);
  $('.dropdown-toggle').text('Price descending');
  document.getElementById('products-row').innerHTML = `
  ${product.map(productTemplate).join('')} 
 `
});

// template literal function
function productTemplate(product) {
  return `
  <figure id="fig" class="col-sm-4">
        <div class="product" style="background: url(${product.image.url}) no-repeat center center" alt="${product.image.name}">
          <div class="promotion-tab" style="display: ${promotionTab(product.promotion)};">${product.promotion}</div>
      	  <div class="overlay">
      	    <div class="prod-name-wrapper">
      	      <p class="prod-name">${product.name}</p>
      	    </div>
      	    <div class="price-container"><p class="from-txt">FROM</p>
      	      <p class="price"><strong>${product.price.slice(0, -3)}<sup>.${product.price[product.price.length - 2] + product.price[product.price.length - 1] }</sup></strong></p>
      	    </div>
      	    <a href="${product.url}"><button class="view-btn">VIEW</button></a>
      	  </div>
        </div>
      </figure> 
  ` 	 
}

// calls and outputs template literal function above
document.getElementById('products-row').innerHTML = `
${product.map(productTemplate).join('')}
`
