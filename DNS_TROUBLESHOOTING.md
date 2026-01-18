# 🔧 Resolvendo "Invalid Configuration" no Vercel

## ❌ Problema
O domínio `slipperworld.co.uk` está mostrando **"Invalid Configuration"** no Vercel.

## ✅ Solução Passo a Passo

### 1. Verificar Instruções do Vercel
1. No painel do Vercel, clique no domínio `slipperworld.co.uk`
2. O Vercel mostrará instruções específicas de DNS
3. Anote os registros DNS que o Vercel pede

### 2. Configurar DNS no Seu Registrador

Você precisa adicionar os registros DNS no seu registrador de domínio (onde você comprou o domínio).

#### Opção A: Usar Nameservers do Vercel (Mais Fácil)
1. No Vercel, copie os nameservers fornecidos
2. No seu registrador, vá em "DNS Settings" ou "Nameservers"
3. Altere os nameservers para os fornecidos pelo Vercel
4. Exemplo de nameservers Vercel:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

#### Opção B: Adicionar Registros DNS Manualmente
Se preferir manter seus nameservers atuais, adicione estes registros:

**Para domínio principal (apex domain):**
```
Tipo: A
Nome: @ (ou deixe em branco)
Valor: 76.76.21.21
TTL: 3600 (ou Auto)
```

**Para subdomínio www (opcional):**
```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600 (ou Auto)
```

### 3. Aguardar Propagação DNS
- Pode levar de alguns minutos até 48 horas
- Geralmente leva 1-2 horas
- Use ferramentas para verificar:
  - https://dnschecker.org
  - https://www.whatsmydns.net

### 4. Verificar no Vercel
Após configurar o DNS:
1. Aguarde alguns minutos
2. Atualize a página do Vercel
3. O status deve mudar de "Invalid Configuration" para "Valid Configuration"
4. O SSL será configurado automaticamente

## 🔍 Verificações

### Verificar se o DNS está configurado corretamente:

**No Windows (PowerShell):**
```powershell
nslookup slipperworld.co.uk
```

**Ou use ferramentas online:**
- https://dnschecker.org/#A/slipperworld.co.uk
- https://www.whatsmydns.net/#A/slipperworld.co.uk

### O que procurar:
- O registro A deve apontar para `76.76.21.21` (ou o IP fornecido pelo Vercel)
- O registro deve aparecer em servidores DNS ao redor do mundo

## ⚠️ Problemas Comuns

### 1. DNS ainda não propagou
- **Solução**: Aguarde mais tempo (até 48 horas)

### 2. Registros DNS incorretos
- **Solução**: Verifique se digitou corretamente no registrador
- Certifique-se de que o tipo de registro está correto (A, não CNAME para apex)

### 3. Nameservers não foram alterados
- **Solução**: Se escolheu usar nameservers do Vercel, certifique-se de que alterou no registrador

### 4. Domínio não está no seu controle
- **Solução**: Verifique se você realmente possui o domínio `slipperworld.co.uk`

## 📝 Checklist

- [ ] Domínio `slipperworld.co.uk` está registrado
- [ ] Acessei o painel do registrador
- [ ] Adicionei os registros DNS conforme instruções do Vercel
- [ ] Aguardei propagação DNS (verifiquei com dnschecker.org)
- [ ] Atualizei a página do Vercel
- [ ] Status mudou para "Valid Configuration"

## 🆘 Ainda com Problemas?

1. **Verifique os logs do Vercel**: Settings → Domains → veja mensagens de erro
2. **Contate o suporte do Vercel**: Eles podem ajudar com problemas específicos
3. **Verifique com seu registrador**: Eles podem ajudar com configurações DNS

## 💡 Dica

Enquanto o domínio não está configurado, o site continua funcionando em:
- `slipper-world-store.vercel.app`

Você pode continuar usando esse domínio até o domínio personalizado estar funcionando.
