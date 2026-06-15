import logoImage from "../../assets/logo.png";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  ClipboardPen,
  BarChart3,
  UserCircle2,
  Menu,
  X,
} from "lucide-react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  const menuToggle = () => {
    setMenuAberto((aberto) => !aberto);
  };

  const irPara = (rota) => {
    navigate(rota);
    setMenuAberto(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <Link to="/home">
          <img src={logoImage} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

      <div className={menuAberto ? styles.menuAberto : styles.menu}>
        <button
          className={styles.menuItem}
          type="button"
          onClick={() => irPara("/bq")}
        >
          <BookOpen size={24} />
          <span>Banco de Questões</span>
        </button>

        <button className={styles.menuItem} type="button">
          <ClipboardPen size={24} />
          <span>Simulados</span>
        </button>

        <button
          className={styles.menuItem}
          type="button"
          onClick={() => irPara("/desempenho")}
        >
          <BarChart3 size={24} />
          <span>Meu Desempenho</span>
        </button>
      </div>

      <button className={styles.profileButton} type="button">
        <UserCircle2 size={34} />
      </button>

      <button className={styles.menuToggle} type="button" onClick={menuToggle}>
        {menuAberto ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Header;
