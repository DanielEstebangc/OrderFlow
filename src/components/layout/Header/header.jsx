import "./header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <span className="header-icon"><ShoppingCartIcon color="white" sx={{ fontSize: 50 }} /></span>

        <div className="header-text">
          <h1 className="header-title">Formulario de Pedido</h1>
          <p className="header-subtitle">Complete la información del pedido</p>
        </div>

      </div>
    </header>
  );
}