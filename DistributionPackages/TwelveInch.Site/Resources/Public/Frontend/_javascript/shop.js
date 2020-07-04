var client = ShopifyBuy.buildClient({
  domain: 'twelve-inch.myshopify.com',
  storefrontAccessToken: '77a08eb26ac8701f5d9989b7a9eb3039', // previously apiKey, now deprecated
});

var ui = ShopifyBuy.UI.init(client);

ui.createComponent('cart', {
    node: document.getElementById('shopify-cart'),
    toggles: [{node: document.getElementById('cart')}],
    options: {
	    cart: {
			iframe: false,
	      	contents: {
	        	button: true
			},
			text: {
		    	title: 'Your Bag',
				empty: 'Your bag is empty, champ!',
		    },
		},
    	toggle: {
      		sticky: false,
	  		iframe: false,
	  		contents: {
		  		count: false,
		  		icon: true,
		  		title: false,
	  		},
			templates: {
				icon: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" class="{{data.classes.toggle.icon}}" data-element="toggle.icon" x="0px" y="0px" viewBox="0 0 208.955 208.955" style="enable-background:new 0 0 208.955 208.955;"><g class="{{data.classes.toggle.iconPath}}"><path d="M190.85,200.227L178.135,58.626c-0.347-3.867-3.588-6.829-7.47-6.829h-26.221V39.971c0-22.04-17.93-39.971-39.969-39.971 C82.437,0,64.509,17.931,64.509,39.971v11.826H38.27c-3.882,0-7.123,2.962-7.47,6.829L18.035,200.784 c-0.188,2.098,0.514,4.177,1.935,5.731s3.43,2.439,5.535,2.439h157.926c0.006,0,0.014,0,0.02,0c4.143,0,7.5-3.358,7.5-7.5 C190.95,201.037,190.916,200.626,190.85,200.227z M79.509,39.971c0-13.769,11.2-24.971,24.967-24.971 c13.768,0,24.969,11.202,24.969,24.971v11.826H79.509V39.971z M33.709,193.955L45.127,66.797h19.382v13.412 c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V66.797h49.936v13.412c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5 V66.797h19.364l11.418,127.158H33.709z"/></g></svg>',
				}
	    	}
	  	}
});

var element =  document.getElementById('original');
if (typeof(element) != 'undefined' && element != null)
{
	ui.createComponent('product', {
		id: '343786815521',
		node: document.getElementById('original'),
		options: {
			product: {
				iframe: false,
				buttonDestination: 'cart',
				contents: {
					img: false,
					button: false,
					buttonWithQuantity: true,
					title: false,
					price: true,
			    },
				text: {
			    	button: 'Add to cart',
			    }
			},
			cart: {
				startOpen: true,
			},
		}
	});
}

var element =  document.getElementById('adapter');
if (typeof(element) != 'undefined' && element != null)
{
	ui.createComponent('product', {
		id: '343873388577',
		node: document.getElementById('adapter'),
		options: {
			product: {
				iframe: false,
				buttonDestination: 'cart',
				contents: {
					img: false,
					button: false,
					buttonWithQuantity: true,
					title: false,
					price: true,
			    },
				text: {
			    	button: 'Add to cart',
			    }
			},
			cart: {
				startOpen: true,
			},
		}
	});
}