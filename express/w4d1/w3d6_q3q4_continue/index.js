const express = require('express');
const app = express();
const bparser = require('body-parser');
const productsRoute = require('./routes/products');
const path = require('path');
const session = require('express-session');

app.use(session({ secret: 'mysupersecretstring' }));

app.use(bparser.urlencoded());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/css', express.static(path.join(__dirname, 'styles')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/layouts', express.static(path.join(__dirname, 'layouts')));

app.use('/products', productsRoute);

app.get('/', (req, res) => {
  res.redirect('/products');
});

// this route is for w4d2 - AJAX
app.get('/spa', (req, res) => {
  const response = [
    {
      id: 324,
      name: 'Lenovo Ideapag 1i',
      price: '159.98',
      description: '14.0 inch, Pentium N5030',
    },
    {
      id: 4389,
      name: 'MSI GF63 Thin Gaming Laptop',
      price: '559',
      description: '15.6 inch FHD Display',
    },
  ];
  res.json(response);
});

app.post('/spa', (req, res) => {
  //const numb = parseInt(req.query.number);
  res.json(inventory);
});

app.get('/deletecookies', (req, res) => {
  res.cookie('cart', 0, { maxAge: 0 });
  res.redirect('/');
});

const prod = require('./product');

module.exports = [
  new prod(
    'Starbucks K-Cup Coffee Pods—Medium Roast Coffee—Pike Place Roast for Keurig Brewers—100% Arabica—4 boxes (96 pods total)',
    'Named for our first store in Seattle’s Pike Place Market, this coffee is served fresh every day in Starbucks cafés around the world. A smooth, well-rounded blend of Latin American beans with subtly rich flavors of cocoa and praline, it’s the perfect brewed coffee—a consistently delicious cup you can really look forward to. Enjoy the spirit of Pike Place in every sip. Pike Place is a registered trademark of The Pike Place Market PDA, used under license. Nestlé uses Starbucks trademarks under license',
    43.04,
    'https://m.media-amazon.com/images/I/81DC4qmldpL._SL1500_.jpg'
  ),
  new prod(
    'TOZO A1 Mini Wireless Earbuds Bluetooth 5.3 in Ear Light-Weight Headphones Built-in Microphone, IPX5 Waterproof, Immersive Premium Sound Long Distance Connection Headset with Charging Case, Black',
    '[Ultra lightweight and compatible for small ear] The surface and Angle of A1 earbuds in-ear part have been polished and refined repeatedly to achieve a balance between beauty and comfort and make it comfortable to wear. Likewise, a single earbud weighs only 3.7g, making it as light as a feather and discreet in the ear. Ergonomic design provides a comfortable and secure fit that doesn’t protrude from your ears especially for Sports, Workout, Gym.',
    15.29,
    'https://m.media-amazon.com/images/I/71QmCwmm3ML._AC_SL1500_.jpg'
  ),
  new prod(
    'Berwick Offray 062036 3/8 Wide Single Face Satin Ribbon, Red, 6 Yds',
    '00 % Polyester,Polyester,Satin',
    1.97,
    'https://m.media-amazon.com/images/I/71dBP1+gfoL._AC_SL1500_.jpg'
  ),
  new prod(
    'EXPO Low Odor Dry Erase Markers, Ultra-Fine Tip, Assorted Colors, 8 Pack',
    'Dry erase markers in a range of bold, vibrant colors    ',
    7.59,
    'https://m.media-amazon.com/images/I/81t3wznsRvL._AC_SL1500_.jpg'
  ),
  new prod(
    'GOUXTD New Taxidermy - Rooster Table Lamp, 3D LED Night Lights, Lifelike Resin Chicken Egg Lam Light, Easter Hen Laying Eggs Lamp Plush for Home Bedroom Living Room Decor NWILEAU',
    "Taxidermy Chicken Egg Lamp: Received within 5-10 days! Is it art, or is it something that you just found in a dumpsterThat's the question with this chicken egg lamp! Surprisingly, the very odd yet quite intriguing chicken egg lamp is considered art, at least to a select few.NWILEAU",
    13.9,
    'https://m.media-amazon.com/images/I/51ggMPDJ1nL._AC_SL1500_.jpg'
  ),
];

app.listen(3000);
