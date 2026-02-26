# ⚓ Морський бій (Battleship 5×5)

Гра "Морський бій" - класична настільна гра, реалізована на React з адаптивним дизайном та різними рівнями складності.

## Про проект

**Версія:** 1.0.0  
**Тип ліцензії:** [MIT License](LICENSE)  
**Автори:** Battleship React Game Contributors  
**Мова:** TypeScript + React + Vite

### Основні технології

- **React 19** - бібліотека для побудови UI
- **TypeScript 5.9** - типізація JavaScript
- **Vite 7** - швидкий збирач модулів
- **Tailwind CSS 4** - утилітарний CSS фреймворк
- **Framer Motion 12** - анімації
- **React Router 7** - маршрутизація
- **Zustand 5** - управління станом
- **React Hook Form 7** - управління формами
- **Yup 1.7** - валідація форм

## Встановлення та запуск

### 1. Клонування репозиторію

```bash
git clone https://git.ztu.edu.ua/ipz233_bsv/react-project
cd battleship-react-game
```

### 2. Встановлення залежностей

```bash
cd battleship
npm install
```

### 3. Запуск у режимі розробки

```bash
npm run dev
```

Додаток буде доступний за адресою: `http://localhost:5173` (порт може бути інший)

## Доступні команди

| Команда | Опис |
|---------|------|
| `npm run dev` | Запуск у режимі розробки з HMR (Hot Module Replacement) |
| `npm run build` | Збирання проекту для продакшену |
| `npm run lint` | Перевірка коду ESLint |
| `npm run preview` | Переглід збудованого проекту |

## Структура проекту

```
src/
├── assets/              # Медіа файли та статичні ресурси
├── components/          # Переиспользуемые React компоненти
│   ├── Container.tsx
│   ├── GameButton.tsx
│   ├── GameResultModal.tsx
│   ├── GameTimer.tsx
│   ├── HeaderText.tsx
│   ├── PageComponent.tsx
│   ├── SelectDropdown.tsx
│   └── SubText.tsx
├── constants/           # Константи додатку
│   └── difficulties.ts   # Рівні складності гри
├── context/             # React Context для глобального стану
│   └── GameSettingsContext.tsx
├── hooks/               # Кастомні React хуки
│   └── useGame.tsx      # Основна логіка гри
├── pages/               # Сторінки додатку
│   ├── GamePage.tsx     # Сторінка гри
│   ├── SettingsPage.tsx # Сторінка налаштувань
│   ├── StartPage.tsx    # Початкова сторінка
│   └── UserPage.tsx     # Сторінка користувача
├── router/              # Конфігурація маршрутизації
│   └── AppRouter.tsx
├── store/               # Zustand сховище станів
│   └── gameStore.ts
├── styles/              # Глобальні стилі
│   └── global.css
├── App.tsx              # Основний компонент
└── main.tsx             # Точка входу

public/                  # Статичні файли
```

## Конфігурація

### TypeScript

Проект використовує TypeScript з наступною конфігурацією:
- **Версія:** ~5.9.3
- **Target:** ES2020
- **Module:** ESNext
- **JSX:** react-jsx

Файли конфігурації:
- `tsconfig.json` - базова конфігурація
- `tsconfig.app.json` - конфігурація для додатку
- `tsconfig.node.json` - конфігурація для Node.js скриптів

### ESLint

Проект використовує ESLint для забезпечення якості коду:
- **Версія:** 9.36.0
- **Конфігураційний файл:** `eslint.config.js`

Запуск перевірки:
```bash
npm run lint
```

### Vite

Конфігурація Vite знаходиться в `vite.config.ts`:
- Плагін React для JSX/TSX
- Інтеграція Tailwind CSS
- Оптимізація для продакшену

## Залежності

### Production залежності

- `@hookform/resolvers` - інтеграція з React Hook Form
- `@tailwindcss/vite` - інтеграція Tailwind CSS
- `framer-motion` - бібліотека анімацій
- `lucide-react` - набір іконок
- `react` - основна бібліотека
- `react-dom` - робота з DOM
- `react-hook-form` - управління формами
- `react-router-dom` - маршрутизація
- `yup` - валідація схеми
- `zustand` - управління станом

### Development залежності

- `@types/react` - типи для React
- `@types/react-dom` - типи для React DOM
- `@types/node` - типи для Node.js
- `@vitejs/plugin-react` - Vite плагін для React
- `autoprefixer` - обробка CSS префіксів
- `eslint` та плагіни - лінтинг коду
- `postcss` - обробка CSS
- `tailwindcss` - CSS фреймворк
- `typescript` - типізація
- `vite` - збирач модулів

## Ліцензія та авторство

### Ліцензія

Цей проект розповсюджується під ліцензією **MIT License**.

Повний текст ліцензії: [LICENSE](LICENSE)

### Авторство

**Copyright © 2026 Battleship React Game Contributors**

Всі права застережені.

### Залежності та їх ліцензії

Проект використовує численні бібліотеки з відкритим кодом. Повний список залежностей та їх ліцензій доступний у файлі:

[DEPENDENCIES_LICENSES.md](DEPENDENCIES_LICENSES.md)

## Контроль якості

### Перевірка ліцензій залежностей

Всі залежності проекту перевірені на ліцензійну сумісність за допомогою інструмента **license-checker**.

Результати перевірки записані в [DEPENDENCIES_LICENSES.md](DEPENDENCIES_LICENSES.md).

Усі використовувані залежності мають сумісні ліцензії (MIT, Apache-2.0 та ін.) та можуть бути використані у комерційних та некомерційних проектах.

## Git конфігурація

Проект використовує Git для версіонування:

```bash
# Переглід історії
git log

# Перегляд змін
git status
```

## Подальші кроки

1. Встановіть залежності: `npm install`
2. Запустіть у режимі розробки: `npm run dev`
3. Переглядайте документацію залежностей: [DEPENDENCIES_LICENSES.md](DEPENDENCIES_LICENSES.md)
4. Дотримуйтеся MIT ліцензії при розповсюдженні

---

**Остання оновлення:** Лютий 2026
