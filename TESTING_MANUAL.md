# 📱 Guía de Testing Manual - Responsividad Móvil

## 🎯 Objetivo
Verificar que el sitio ZDA funcione correctamente en todos los tamaños de pantalla sin scroll horizontal ni elementos rotos.

---

## 🧪 Tests a Realizar

### **Test 1: Mobile 320px (iPhone SE)**

**Cómo hacerlo:**
1. Abre Chrome DevTools (F12)
2. Click en el ícono de dispositivo móvil (Toggle device toolbar)
3. Selecciona "iPhone SE" o configura manualmente: 320px x 568px
4. Refresca la página

**Checklist:**
- [ ] ✅ No hay scroll horizontal en ninguna página
- [ ] ✅ El logo se ve completo
- [ ] ✅ El menú hamburguesa funciona
- [ ] ✅ Los botones son clickeables (mínimo 44px de alto)
- [ ] ✅ Las imágenes no se salen del viewport
- [ ] ✅ El texto no se corta
- [ ] ✅ El formulario de contacto es usable
- [ ] ✅ El carrito se abre correctamente

**Páginas a verificar:**
- `/` (Home)
- `/productos`
- `/nosotros`
- `/producto/barra-manubrio` (cualquier producto)

---

### **Test 2: Mobile 375px (iPhone 12/13/14)**

**Cómo hacerlo:**
1. En DevTools, selecciona "iPhone 12 Pro" o configura: 375px x 812px
2. Refresca la página

**Checklist:**
- [ ] ✅ Layout se ve mejor que en 320px
- [ ] ✅ Trust bar (features) se ve correctamente
- [ ] ✅ Grid de productos funciona
- [ ] ✅ Imágenes del showcase se ven bien
- [ ] ✅ Formulario tiene buen spacing

---

### **Test 3: Tablet 768px (iPad)**

**Cómo hacerlo:**
1. En DevTools, selecciona "iPad" o configura: 768px x 1024px
2. Refresca la página

**Checklist:**
- [ ] ✅ Menú desktop aparece (no hamburguesa)
- [ ] ✅ Grid de productos muestra 2-3 columnas
- [ ] ✅ Formulario muestra 2 columnas (nombre y teléfono lado a lado)
- [ ] ✅ Imágenes del home se ven en grid correcto

---

### **Test 4: Desktop 1024px+**

**Cómo hacerlo:**
1. Configura viewport a 1024px o más ancho
2. Verifica layout completo

**Checklist:**
- [ ] ✅ Menú horizontal visible
- [ ] ✅ Hero full-screen se ve impactante
- [ ] ✅ Grid de productos en 3-4 columnas
- [ ] ✅ Todas las animaciones funcionan

---

## 🔍 **Problemas Comunes a Buscar**

### **Scroll Horizontal**
```css
/* Si encuentras scroll horizontal, busca estos elementos: */
- Elementos con width fijo mayor al viewport
- Padding/margin que excede el contenedor
- Grid con columnas muy anchas
```

**Cómo verificar:**
1. Abre DevTools Console
2. Ejecuta: `document.body.scrollWidth > window.innerWidth`
3. Si retorna `true`, hay scroll horizontal ❌

### **Texto Cortado**
- Títulos muy largos sin `line-clamp` o `text-overflow`
- Botones con texto que no cabe

### **Imágenes Rotas**
- Imágenes que se salen del contenedor
- Aspect ratio incorrecto

---

## 📊 **Reporte de Resultados**

Completa esta tabla después de hacer los tests:

| Viewport | Scroll Horizontal | Layout OK | Funcionalidad | Rating |
|----------|-------------------|-----------|---------------|--------|
| 320px    | ☐ SÍ ☐ NO        | ☐ SÍ ☐ NO | ☐ SÍ ☐ NO    | ⭐⭐⭐⭐⭐ |
| 375px    | ☐ SÍ ☐ NO        | ☐ SÍ ☐ NO | ☐ SÍ ☐ NO    | ⭐⭐⭐⭐⭐ |
| 768px    | ☐ SÍ ☐ NO        | ☐ SÍ ☐ NO | ☐ SÍ ☐ NO    | ⭐⭐⭐⭐⭐ |
| 1024px+  | ☐ SÍ ☐ NO        | ☐ SÍ ☐ NO | ☐ SÍ ☐ NO    | ⭐⭐⭐⭐⭐ |

---

## 🛠️ **Análisis de Código (Pre-Test)**

He revisado el código y estos son los puntos clave:

### ✅ **Elementos Responsive Implementados**

1. **Container con max-width:**
   ```tsx
   className="container mx-auto px-4"
   ```
   ✅ Previene overflow horizontal

2. **Grid Responsive:**
   ```tsx
   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
   ```
   ✅ Se adapta a diferentes tamaños

3. **Tipografía Escalable:**
   ```tsx
   className="text-5xl md:text-7xl lg:text-8xl"
   ```
   ✅ Títulos se ajustan al viewport

4. **Imágenes Contenidas:**
   ```tsx
   className="w-full h-full object-cover"
   ```
   ✅ No se salen del contenedor

5. **Botones con padding adecuado:**
   ```tsx
   className="px-10 py-5"
   ```
   ✅ Touch targets > 44px

### ⚠️ **Áreas de Riesgo Potencial**

1. **Hero Full-Screen en Mobile**
   - `h-screen` puede ser muy alto en móviles
   - **Recomendación:** Verificar que el contenido sea visible sin scroll

2. **Formulario en 320px**
   - Grid de 2 columnas puede ser estrecho
   - **Verificar:** Inputs tienen ancho suficiente

3. **Cart Drawer**
   - `max-w-md` puede ser ancho en 320px
   - **Verificar:** No cubre toda la pantalla inadecuadamente

---

## 🎯 **Criterios de Aprobación**

Para aprobar el test de responsividad:

- ✅ **0 scroll horizontal** en todas las páginas
- ✅ **Todos los botones clickeables** (≥44px touch target)
- ✅ **Texto legible** sin zoom
- ✅ **Imágenes escaladas** correctamente
- ✅ **Formularios usables** sin frustración

---

## 📸 **Screenshots Recomendados**

Toma screenshots de:
1. Home en 320px
2. Productos en 375px
3. Nosotros en 768px
4. Detalle de producto en 320px
5. Cart drawer abierto en 375px

Guárdalos en: `C:\Users\Brian\Downloads\ZDA\screenshots\`

---

## 🚀 **Siguiente Paso**

Después de completar los tests:
1. Marca los checkboxes ✅
2. Si encuentras issues, documéntalos
3. Avísame para que los corrija
4. Una vez todo ✅, actualizamos el QA_REPORT.md

**Tiempo estimado:** 10-15 minutos
