import React from 'react';

function Basket({ basket }) {
    const itemCounts = basket.reduce((counts, item) => {
      counts[item.id] = (counts[item.id] || 0) + 1;
      return counts;
    }, {});
  
    const total = Object.entries(itemCounts).reduce((sum, [id, count]) => {
      const item = basket.find((i) => i.id === parseInt(id));
      return sum + item.price * count;
    }, 0);
  
  
    return (
      <table>
        <tbody>
          {Object.entries(itemCounts).map(([id, count]) => {
            const item = basket.find((i) => i.id === parseInt(id));
            return (
              <tr key={item.id}>
                <td>{count}</td>
                <td>{item.name}</td>
                <td>£{(item.price * count).toFixed(2)}</td>
              </tr>
            );
          })};
  
          <tr>
            <td colSpan="2">Total</td>
            <td>£{total.toFixed(2)}</td>
          </tr>
          
        </tbody>
      </table>
    );
};
export default Basket;
