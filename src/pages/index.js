import React, { useState, useEffect } from "react";
import Head from "next/head";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=20"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        console.log("Dados recebidos da API:", data);
        setProducts(data);
      } catch (err) {
        console.error("Falha ao buscar produtos:", err);
        setError(
          err.message ||
            "Ocorreu um erro ao buscar os produtos. Por favor, tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lojinha do Morro</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Image
          src="/logo.png"
          alt="Logo da Lojinha do Morro"
          className={styles.logo}
          width={80}
          height={80}
        />
        <h1>Lojinha do Morro</h1>
        <form className={styles.searchForm}>
          <input
            type="text"
            placeholder="O que você está procurando hoje?"
            className={styles.searchInput}
          />

          <button type="submit" className={styles.searchButton}>
            Buscar
          </button>
        </form>
      </header>

      <main className={styles.main}>
        <h3 className={styles.title}>Confira os nossos produtos</h3>
        {loading && (
          <div className={styles.loadingMessage}>
            Bem-vindos a Lojinha do Morro.
            <br /> Carregando produtos...
          </div>
        )}
        {error && (
          <div className={styles.errorMessage}>Erro ao buscar produtos.</div>
        )}
        {!loading && !error && <ProductList products={products} />}
      </main>

      <footer className={styles.footer}>
        <p>
          &copy; Lojinha do Morro - Igor Gomes/José Pedro - {new Date().getFullYear()}.
          Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
