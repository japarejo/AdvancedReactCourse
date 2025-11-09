export default function PlaceOrderButton({disabled, children }) {
   return (
    <button type="submit" disabled={disabled } >
      {children ?? 'Pagar'}
    </button>    
  ) 
  
}

