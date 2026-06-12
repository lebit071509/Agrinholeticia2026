# 🎬 Micro-Interações — Exemplos de CSS

## 1️⃣ Botões com Hover Suave (Cor + Zoom)

### Código CSS

```css
.btn {
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-base);
  
  /* Transição suave */
  transition: all var(--transition-base) cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Remove transformação inicial para não quebrar layout */
  transform: translateY(0) scale(1);
}

.btn:hover:not(:disabled) {
  /* Zoom suave (1% a 5% é imperceptível mas sutil) */
  transform: translateY(-2px) scale(1.02);
  
  /* Sombra aumentada para profundidade */
  box-shadow: 0 8px 20px rgba(26, 44, 36, 0.15);
}

.btn:active:not(:disabled) {
  /* Feedback tátil: encolhe um pouco ao clicar */
  transform: translateY(0) scale(0.98);
}

/* Para botões primários, muda cor no hover */
.btn.primary:hover:not(:disabled) {
  background: linear-gradient(90deg, #1E5F4D, #0D3D2E);
  box-shadow: 0 12px 30px rgba(45, 122, 95, 0.25);
}

/* Para botões secundários */
.btn.secondary:hover:not(:disabled) {
  background: linear-gradient(90deg, rgba(45, 122, 95, 0.15), rgba(45, 122, 95, 0.1));
  border-color: var(--color-primary);
}
```

### Comportamento
- **Hover**: Sobe 2px + cresce 2% + aumenta sombra
- **Click**: Encolhe 2% para feedback tátil
- **Disabled**: Sem transformação

---

## 2️⃣ Links do Menu com Underline Animado

### Código CSS

```css
/* Links no menu */
.nav-top a,
.top-nav a {
  position: relative;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--fw-semibold);
  
  /* Padding para acomodar underline */
  padding-bottom: 2px;
}

/* Pseudo-elemento para underline */
.nav-top a::after,
.top-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent-warm));
  
  /* Animação suave */
  transition: width var(--transition-base) cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hover: underline cresce da esquerda para direita */
.nav-top a:hover::after,
.top-nav a:hover::after {
  width: 100%;
}

/* Efeito alternativo: escurece o texto no hover */
.nav-top a:hover,
.top-nav a:hover {
  color: var(--color-primary-dark);
}
```

### Variações

**Opção A: Underline que cresce ao centro (mais sofisticado)**
```css
.nav-top a::after {
  left: 50%;
  width: 0;
}

.nav-top a:hover::after {
  left: 0;
  width: 100%;
}
```

**Opção B: Fundo deslizante (muito moderno)**
```css
.nav-top a::before {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 20px;
  background: rgba(45, 122, 95, 0.08);
  border-radius: 4px;
  
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.nav-top a:hover::before {
  transform: scaleX(1);
  transform-origin: right;
}
```

---

## 3️⃣ Fade-In para Elementos ao Carregar

### Código CSS Puro

```css
/* Animação fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Aplicar fade-in a elementos */
.stage {
  animation: fadeIn var(--transition-slow) ease-out forwards;
}

.stage.active {
  animation: fadeIn var(--transition-slow) ease-out forwards;
}

/* Delay progressivo para múltiplos elementos */
.footer-section:nth-child(1) {
  animation: fadeIn 0.6s ease-out 0.1s forwards;
  opacity: 0; /* Começa invisível */
}

.footer-section:nth-child(2) {
  animation: fadeIn 0.6s ease-out 0.2s forwards;
  opacity: 0;
}

.footer-section:nth-child(3) {
  animation: fadeIn 0.6s ease-out 0.3s forwards;
  opacity: 0;
}

/* Ou usar variável para delay dinâmico */
.animate-in {
  animation: fadeIn var(--transition-base) ease-out forwards;
  opacity: 0;
}

.animate-in:nth-child(1) { animation-delay: 0.1s; }
.animate-in:nth-child(2) { animation-delay: 0.2s; }
.animate-in:nth-child(3) { animation-delay: 0.3s; }
.animate-in:nth-child(4) { animation-delay: 0.4s; }
```

### Variações de Fade-In

**Fade-in com deslize lateral (esquerda)**
```css
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.stage { animation: fadeInLeft 0.6s ease-out; }
```

**Fade-in com deslize lateral (direita)**
```css
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.stage { animation: fadeInRight 0.6s ease-out; }
```

**Fade-in com zoom suave**
```css
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.popup-content { animation: fadeInScale 0.4s ease-out; }
```

---

## 4️⃣ Bonus: Ripple Effect em Botões (Efeito Material Design)

```css
.btn {
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  
  transition: width 0.6s, height 0.6s;
}

.btn:active::before {
  width: 300px;
  height: 300px;
}
```

---

## 📋 Resumo de Transições do Design System

```css
:root {
  --transition-fast: 150ms;  /* Para micro-interações rápidas */
  --transition-base: 250ms;  /* Padrão (botões, menus) */
  --transition-slow: 350ms;  /* Para animações de página */
}

/* Usar easing cúbico para movimento natural */
cubic-bezier(0.4, 0, 0.2, 1)  /* Standard (ease-out) */
cubic-bezier(0.25, 0.46, 0.45, 0.94)  /* Bounce-like */
```

---

## ✅ Implementação Recomendada

1. **Botões** → Sempre com hover transform + sombra
2. **Links** → Underline animado (mais elegante que cor)
3. **Elementos** → Fade-in ao carregar (melhor na primeira impressão)
4. **Formulários** → Focus com borda colorida + sombra
5. **Cards** → Hover com elevação (shadow + transform)

---

## 🎯 Boas Práticas

✅ Usar `transition` não `animation` para hovers  
✅ Manter duração entre 150ms-350ms (tempo perceptível mas rápido)  
✅ Usar `cubic-bezier(0.4, 0, 0.2, 1)` para movimento natural  
✅ Prefixar com variáveis CSS (`:root`) para consistência  
✅ Sempre incluir `will-change` em animações pesadas  
✅ Respeitar `prefers-reduced-motion` para acessibilidade  

---
