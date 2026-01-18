# 🔍 Como Verificar se o Google Analytics Está Funcionando

## ✅ Métodos de Verificação

### 1. **Google Analytics Real-Time (Mais Rápido)**

1. Acesse: https://analytics.google.com
2. Selecione sua propriedade (G-WTR0QB8KP8)
3. Vá em **Reports** → **Real-time** → **Overview**
4. Abra seu site em outra aba: `https://slipper-world-store.vercel.app`
5. Navegue pelo site
6. **Resultado**: Você deve ver sua visita aparecer em tempo real (dentro de 30 segundos)

**✅ Funcionando se:** Você vê "1 user" e sua localização/device aparecendo

---

### 2. **Verificar no Código Fonte da Página**

1. Acesse seu site: `https://slipper-world-store.vercel.app`
2. Clique com botão direito → **"Ver código-fonte"** ou **"View Page Source"**
3. Pressione `Ctrl+F` e procure por: `G-WTR0QB8KP8`
4. **Resultado**: Deve encontrar o código do Google Analytics

**✅ Funcionando se:** Encontra o ID `G-WTR0QB8KP8` no código

---

### 3. **Google Tag Assistant (Extensão do Chrome)**

1. Instale a extensão: [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Acesse seu site: `https://slipper-world-store.vercel.app`
3. Clique no ícone da extensão
4. Clique em **"Enable"**
5. Recarregue a página
6. **Resultado**: Deve mostrar um ícone verde com "Google Analytics: Universal Analytics"

**✅ Funcionando se:** Mostra ícone verde e confirma o tracking

---

### 4. **Console do Navegador (Developer Tools)**

1. Acesse seu site: `https://slipper-world-store.vercel.app`
2. Pressione `F12` para abrir Developer Tools
3. Vá na aba **"Network"** (Rede)
4. Recarregue a página (`F5`)
5. Filtre por: `gtag` ou `google-analytics`
6. **Resultado**: Deve ver requisições para `www.google-analytics.com`

**✅ Funcionando se:** Vê requisições sendo enviadas para o Google Analytics

---

### 5. **Verificar dataLayer (Console)**

1. Acesse seu site: `https://slipper-world-store.vercel.app`
2. Pressione `F12` para abrir Developer Tools
3. Vá na aba **"Console"**
4. Digite: `dataLayer` e pressione Enter
5. **Resultado**: Deve mostrar um array com dados do Google Analytics

**✅ Funcionando se:** Mostra um array com objetos contendo informações de tracking

---

### 6. **Extensão "Google Analytics Debugger"**

1. Instale: [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
2. Ative a extensão
3. Acesse seu site: `https://slipper-world-store.vercel.app`
4. Abra o Console (`F12` → Console)
5. **Resultado**: Deve ver logs detalhados do Google Analytics

**✅ Funcionando se:** Vê logs como "Running Google Analytics (analytics.js)" e eventos sendo enviados

---

## ⏱️ Tempo de Espera

- **Real-Time**: Funciona imediatamente (0-30 segundos)
- **Relatórios normais**: Podem levar 24-48 horas para aparecer dados completos
- **Primeira visita**: Pode demorar alguns minutos para aparecer

---

## 🐛 Problemas Comuns

### Não aparece no Real-Time?
- ✅ Verifique se o código está no `<head>` (está correto)
- ✅ Aguarde alguns minutos após o deploy
- ✅ Verifique se não há bloqueadores de anúncios ativos
- ✅ Teste em modo anônimo/privado

### Código não aparece no código-fonte?
- ✅ Verifique se o deploy foi concluído no Vercel
- ✅ Limpe o cache do navegador (`Ctrl+Shift+R`)
- ✅ Verifique se o arquivo `index.html` foi atualizado

### Extensões não detectam?
- ✅ Desative bloqueadores de anúncios (uBlock, AdBlock)
- ✅ Verifique se está usando HTTPS
- ✅ Teste em outro navegador

---

## 📊 Onde Ver os Dados

1. **Real-Time**: https://analytics.google.com → Real-time → Overview
2. **Relatórios**: https://analytics.google.com → Reports → Audience → Overview
3. **Eventos**: https://analytics.google.com → Reports → Events

---

## ✅ Checklist Rápido

- [ ] Código adicionado no `index.html` ✅
- [ ] Deploy feito no Vercel ✅
- [ ] Site acessível online ✅
- [ ] Testei no Real-Time do Google Analytics
- [ ] Vi minha visita aparecer
- [ ] Console mostra requisições para Google Analytics

---

## 🎯 Método Mais Confiável

**Use o Real-Time do Google Analytics** - é o método mais rápido e confiável:
1. Abra o Real-Time no Google Analytics
2. Abra seu site em outra aba
3. Navegue pelo site
4. Veja sua visita aparecer em tempo real

Se aparecer no Real-Time, está funcionando! 🎉
