# Guia de Configuração de Domínio Personalizado no Vercel

## 📋 Pré-requisitos
- Domínio registrado (ex: `slipperworld.co.uk`, `slipperworldstore.com`)
- Acesso ao painel de controle do seu registrador de domínio
- Projeto já deployado no Vercel

## 🚀 Passo a Passo

### 1. Adicionar Domínio no Vercel

1. Acesse o painel do Vercel: https://vercel.com/dashboard
2. Selecione seu projeto **Slipper World Store**
3. Vá em **Settings** → **Domains**
4. Clique em **Add Domain**
5. Digite seu domínio (ex: `slipperworld.co.uk` ou `www.slipperworld.co.uk`)
6. Clique em **Add**

### 2. Configurar DNS no Registrador

O Vercel fornecerá instruções específicas. Geralmente você precisa:

#### Opção A: Configuração com Nameservers (Recomendado)
- Copie os nameservers fornecidos pelo Vercel
- No seu registrador, altere os nameservers do domínio para os fornecidos pelo Vercel
- Exemplo de nameservers Vercel:
  ```
  ns1.vercel-dns.com
  ns2.vercel-dns.com
  ```

#### Opção B: Configuração com Registros DNS
Se preferir manter seus nameservers atuais, adicione estes registros:

**Para domínio principal (apex):**
```
Tipo: A
Nome: @
Valor: 76.76.21.21
```

**Para subdomínio www:**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

### 3. Configurar HTTPS (Automático)

O Vercel configura SSL/HTTPS automaticamente após a verificação do domínio. Isso pode levar alguns minutos até 24 horas.

### 4. Atualizar URLs no Código (Opcional)

Se você mudou o domínio, atualize as URLs em:
- `client/index.html` (canonical, og:url, etc.)
- `client/public/sitemap.xml`
- `client/public/robots.txt`

## ✅ Verificação

Após configurar:
1. Aguarde a propagação DNS (pode levar até 48 horas, geralmente menos)
2. Verifique o status no painel do Vercel
3. Teste acessando seu domínio no navegador
4. Verifique se o HTTPS está ativo (cadeado verde)

## 🔧 Troubleshooting

### Domínio não está funcionando?
- Verifique se os registros DNS estão corretos
- Use ferramentas como `dig` ou `nslookup` para verificar
- Aguarde até 48 horas para propagação completa

### HTTPS não está ativo?
- O Vercel configura automaticamente, aguarde alguns minutos
- Verifique se o domínio está corretamente verificado no Vercel

### Erro 404?
- Verifique se o `vercel.json` está configurado corretamente
- Certifique-se de que o build está funcionando

## 📝 Notas Importantes

- O domínio gratuito do Vercel (`*.vercel.app`) continua funcionando
- Você pode ter múltiplos domínios apontando para o mesmo projeto
- O Vercel gerencia automaticamente certificados SSL

## 🆘 Suporte

Se tiver problemas:
1. Consulte a documentação do Vercel: https://vercel.com/docs/concepts/projects/domains
2. Entre em contato com o suporte do Vercel
3. Verifique os logs de deploy no painel do Vercel
