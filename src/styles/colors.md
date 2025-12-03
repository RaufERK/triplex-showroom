# Triplex Next Color System

## 🎨 Как использовать цвета

Все цвета доступны через CSS-переменные. Используй их в `.module.css` файлах:

```css
.myElement {
  background: var(--triplex-next-ColorBrand-50-1-4-0);
  color: var(--triplex-next-ColorNeutral-100-1-4-0);
}
```

## 📊 Цветовые палитры

### Brand (Зелёный — брендовый цвет Сбера)
```
--triplex-next-ColorBrand-0-1-4-0    #1F3336  (самый тёмный)
--triplex-next-ColorBrand-10-1-4-0   #0B3A3C
--triplex-next-ColorBrand-20-1-4-0   #006063
--triplex-next-ColorBrand-30-1-4-0   #007777
--triplex-next-ColorBrand-40-1-4-0   #008985
--triplex-next-ColorBrand-50-1-4-0   #21A19A  ⭐ основной
--triplex-next-ColorBrand-60-1-4-0   #19BDB0
--triplex-next-ColorBrand-70-1-4-0   #4BD9CF
--triplex-next-ColorBrand-80-1-4-0   #71ECDC
--triplex-next-ColorBrand-90-1-4-0   #A8F5E9
--triplex-next-ColorBrand-100-1-4-0  #E3FFFA  (самый светлый)
```

### Neutral (Серые для фонов и границ)
```
--triplex-next-ColorNeutral-100-1-4-0  #ffffff  белый
--triplex-next-ColorNeutral-90-1-4-0   #f2f4f7  светло-серый фон
--triplex-next-ColorNeutral-80-1-4-0   #eef0f4
--triplex-next-ColorNeutral-70-1-4-0   #eaedf1
--triplex-next-ColorNeutral-60-1-4-0   #e7e9ee  границы
--triplex-next-ColorNeutral-50-1-4-0   #e3e6ea  ⭐ основной для границ
--triplex-next-ColorNeutral-40-1-4-0   #d1d5dc
--triplex-next-ColorNeutral-30-1-4-0   #b8bdc5
--triplex-next-ColorNeutral-20-1-4-0   #9fa6ae
--triplex-next-ColorNeutral-10-1-4-0   #868e98
--triplex-next-ColorNeutral-0-1-4-0    #6d7681  тёмно-серый
```

### DarkNeutral (Тёмные для текста)
```
--triplex-next-ColorDarkNeutral-0-1-4-0    #000000  чёрный
--triplex-next-ColorDarkNeutral-10-1-4-0   #171719
--triplex-next-ColorDarkNeutral-20-1-4-0   #1B1B1D
--triplex-next-ColorDarkNeutral-30-1-4-0   #1F1F22
--triplex-next-ColorDarkNeutral-40-1-4-0   #262629
--triplex-next-ColorDarkNeutral-50-1-4-0   #2D2D30  ⭐ основной текст
--triplex-next-ColorDarkNeutral-60-1-4-0   #343437
--triplex-next-ColorDarkNeutral-70-1-4-0   #3B3B3E
--triplex-next-ColorDarkNeutral-80-1-4-0   #424245
--triplex-next-ColorDarkNeutral-90-1-4-0   #49494C
--triplex-next-ColorDarkNeutral-100-1-4-0  #4F4F52
```

### Error (Красные для ошибок)
```
--triplex-next-ColorError-50-1-4-0   #E60037  ⭐ основной (ошибки)
--triplex-next-ColorError-90-1-4-0   #FCE0E6  светлый фон (для уведомлений)
```

### Info (Синие для информации)
```
--triplex-next-ColorInfo-50-1-4-0    #1371E4  ⭐ основной (инфо)
--triplex-next-ColorInfo-90-1-4-0    светлый фон
```

### Success (Зелёные для успеха)
```
--triplex-next-ColorSuccess-50-1-4-0  ⭐ основной (успех)
```

### Warning (Жёлтые для предупреждений)
```
--triplex-next-ColorWarning-50-1-4-0  ⭐ основной (предупреждение)
```

### Alpha (Прозрачные варианты)
```
--triplex-next-ColorDarkNeutralAlpha-80-1-4-0  rgba(31, 31, 34, .25)
--triplex-next-ColorDarkNeutralAlpha-50-1-4-0  rgba(31, 31, 34, .55)
```

## 💡 Примеры использования

### Карточка с брендовым акцентом
```css
.card {
  background: var(--triplex-next-ColorNeutral-100-1-4-0);
  border: 1px solid var(--triplex-next-ColorNeutral-60-1-4-0);
  color: var(--triplex-next-ColorDarkNeutral-50-1-4-0);
}

.cardHeader {
  background: var(--triplex-next-ColorBrand-90-1-4-0);
  color: var(--triplex-next-ColorBrand-20-1-4-0);
}
```

### Кнопка с ховером
```css
.button {
  background: var(--triplex-next-ColorBrand-50-1-4-0);
  color: var(--triplex-next-ColorNeutral-100-1-4-0);
}

.button:hover {
  background: var(--triplex-next-ColorBrand-40-1-4-0);
}
```

### Уведомление об ошибке
```css
.error {
  background: var(--triplex-next-ColorError-90-1-4-0);
  color: var(--triplex-next-ColorError-50-1-4-0);
  border: 1px solid var(--triplex-next-ColorError-70-1-4-0);
}
```

## 🎯 Рекомендации

1. **Используй основные оттенки (50)** для акцентов
2. **Светлые оттенки (80-100)** для фонов
3. **Тёмные оттенки (0-30)** для текста на светлом фоне
4. **Alpha варианты** для overlay и blur эффектов
5. **Не хардкодь цвета** — всегда используй переменные!

## 🔗 Где посмотреть все цвета

Все цвета определены в:
```
node_modules/@sberbusiness/triplex-next/styles/triplex-next.css
```

