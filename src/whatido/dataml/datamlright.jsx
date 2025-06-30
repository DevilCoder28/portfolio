import styles from "./datamlright.module.css";

function DataMLRight() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Data Science & ML</h1>
      <div className={styles.iconGrid}>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
            alt="PyTorch"
          />
          <span>PyTorch</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
          />
          <span>Python</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
            alt="NumPy"
          />
          <span>NumPy</span>
        </div>
        <div className={styles.iconItem}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
            alt="Matplotlib"
          />
          <span>Matplotlib</span>
        </div>
      </div>
      <p className={styles.text}>
        ⚡ Developing highly scalable production ready models for various
        <br />
        deeplearning and statistical use cases
      </p>
      <p className={styles.text}>
        ⚡ Experience of working with Python Libraries (numpy , pandas,
        Matplotlib) and Ml Algo.
      </p>
      <p className={styles.text}>
        ⚡Complex quantitative modelling for dynamic forecasting and time series
        analysis
      </p>
    </div>
  );
}

export default DataMLRight;
