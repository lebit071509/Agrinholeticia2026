# Jornada do Alimento — Agrinho 2026

## 🌱 Sobre o Projeto

**Jornada do Alimento** é um site educativo e interativo desenvolvido para o concurso Agrinho 2026 com o tema: **"Agro forte, futuro sustentável — equilíbrio entre produção e consumo"**.

O projeto oferece uma experiência imersiva de storytelling onde os usuários acompanham o caminho de um alimento (padrão: Tomate) desde a produção sustentável no campo até o consumo consciente na cozinha, destacando a importância do equilíbrio entre práticas agrícolas responsáveis e escolhas de consumo sustentáveis.

---

## 🎯 Funcionalidades Principais

### 1. **Jornada Interativa em 4 Etapas**
- **Introdução**: Apresentação do projeto com opção de escolher alimento (Tomate, Milho ou Feijão)
- **Etapa 1 — O Campo**: Mostra como práticas sustentáveis e tecnologia preservam o solo
- **Etapa 2 — Transporte & Distribuição**: Explica a eficiência logística para reduzir perdas
- **Etapa 3 — O Prato & o Consumidor**: Destaca o consumo consciente e combate ao desperdício
- **Conclusão**: Mensagem inspiradora e opções de compartilhamento

### 2. **Interatividade Dinâmica**
- Navegação suave entre etapas com animações fluidas
- Botões de "Avançar", "Voltar" e "Concluir Jornada"
- Sistema de curiosidades: pop-ups com fatos interessantes sobre produção e consumo
- Seletor dinâmico de alimento que personaliza as curiosidades

### 3. **Design Responsivo e Moderno**
- Paleta de cores inspirada na natureza: tons de verde, terra e detalhes em laranja
- Layout flexível que se adapta a dispositivos móveis, tablets e desktops
- Tipografia moderna (fonte Inter) e bem legível
- Transições suaves e efeitos visuais atraentes

### 4. **Cabeçalho e Rodapé**
- **Header**: Logo, título, tagline e botão de inicialização
- **Footer**: Seções sobre o projeto, valores, contato/redes e créditos

---

## 🏗️ Estrutura Técnica

O projeto é dividido em **3 arquivos principais**:

### `index.html`
Estrutura semântica e acessível contendo:
- Header com branding e navegação
- Seções de estágios (intro, stage-1, stage-2, stage-3, conclusion)
- Pop-up modal para curiosidades
- Footer com informações do projeto
- Formulário de seleção de alimento

### `style.css`
Estilização moderna com:
- Variáveis CSS para paleta de cores (verde, terra, acentos)
- Layout flexível e grid responsivo
- Animações de transição entre estágios
- Estilos de botões, formulários e pop-ups
- Media queries para responsividade

### `script.js`
Lógica de interatividade incluindo:
- Sistema de navegação entre estágios com animações
- Exibição de curiosidades dinâmicas personalizadas por alimento
- Gerenciamento de modal (abrir/fechar pop-ups)
- Funcionalidade de compartilhamento (Web Share API + Clipboard)
- Gerenciamento de foco acessível

---

## 🚀 Como Usar

### Instalação Local
1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em seu navegador
3. Ou rode um servidor local:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

### Navegação
1. Clique em **"Iniciar Jornada"** ou use o botão no topo
2. Escolha um alimento no dropdown
3. Avance pelas etapas clicando em **"Avançar na Jornada"**
4. Explore **"Curiosidades"** em cada etapa para aprender fatos interessantes
5. Complete a jornada na tela de conclusão
6. Compartilhe a dica com a comunidade

---

## 📚 Conteúdo Educativo

### Tema Central
**"Agro forte, futuro sustentável — equilíbrio entre produção e consumo"**

Explora como:
- ✅ Práticas agroecológicas e tecnologia sustentável fortalecem a produção
- ✅ Logística eficiente reduz desperdício e emissões
- ✅ Consumo consciente e redução de desperdício fecham o ciclo
- ✅ O equilíbrio entre essas três dimensões cria futuro sustentável

### Curiosidades por Etapa
- **Campo**: Rotação de culturas, sensores e monitoramento
- **Transporte**: Redução de perdas, embalagens adequadas, cadeias curtas
- **Consumo**: Receitas com sobras, armazenamento correto, compras locais

---

## 🎨 Design & UX

### Paleta de Cores
- **Verde Escuro** (#11492f): Texto principal e elementos de destaque
- **Verde Médio** (#2f855a): Botões primários e gradientes
- **Verde Claro** (#6fcf97): Detalhes e acentos
- **Terra** (#8b5e3c): Contraste natural
- **Laranja/Amarelo** (#f6a623): Detalhes de ênfase
- **Fundo** (#f6fbf7): Branco suave com tons verdes

### Animações
- Transições suaves entre estágios (0.45s cubic-bezier)
- Entrada de elementos da esquerda/direita (parallax)
- Hover effects em botões e elementos interativos
- Fade in/out de modais

---

## 🌐 Acessibilidade

- Navegação semântica com roles ARIA
- Labels e descrições em controles de formulário
- Gerenciamento de foco automático entre estágios
- Suporte a navegação por teclado
- Contraste adequado de cores para legibilidade

---

## 📱 Compatibilidade

- ✅ Desktop (1100px+)
- ✅ Tablet (768px — 1100px)
- ✅ Mobile (até 768px)
- ✅ Navegadores modernos (Chrome, Firefox, Safari, Edge)

---

## 🎓 Objetivos Pedagógicos

Este projeto educativo busca:
1. **Conscientizar** sobre a importância da sustentabilidade agrícola
2. **Valorizar** práticas de agronegócio responsável
3. **Engajar** os usuários através de narrativa interativa
4. **Inspirar** ações de consumo consciente
5. **Conectar** produção sustentável com consumo responsável

---

## 🔧 Tecnologias

- **HTML5**: Semântica e acessibilidade
- **CSS3**: Layout flexível, grid, animações e variáveis CSS
- **JavaScript (Vanilla)**: Interatividade sem dependências externas
- **Google Fonts (Inter)**: Tipografia moderna

---

## 📄 Créditos

Projeto Agrinho 2026 — Desenvolvido com 🌱 para um futuro mais verde.

**Tema:** "Agro forte, futuro sustentável — equilíbrio entre produção e consumo"

---

## 📝 Licença

Este projeto é educativo e faz parte do concurso Agrinho 2026.