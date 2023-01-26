const chai = require('chai')
const expect = chai.expect

class InventoryPage {
  async addToCart(item) {
    let elemId
    if (item === 'backpack' || item === 'bike-light') {
      await page.click(`#add-to-cart-sauce-labs-${item}`)
    }
    else {
        console.log('Wrong input')
        expect(4).to.equal(1)
    }
  }

  async assertCartBadge(count) {
    let cartItemCount 
    cartItemCount = await page.locator('span.shopping_cart_badge').textContent()
    expect(cartItemCount).to.deep.equal(count.toString())
  }
}

module.exports = {InventoryPage}