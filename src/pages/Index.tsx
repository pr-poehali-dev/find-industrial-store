import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const categories = [
    { name: 'Хозтовары', icon: 'Home', description: 'Товары для дома и быта', color: 'bg-orange-100 text-orange-700' },
    { name: 'Канцтовары', icon: 'FileText', description: 'Офисные принадлежности', color: 'bg-green-100 text-green-700' },
    { name: 'Бытовая химия', icon: 'Droplets', description: 'Моющие и чистящие средства', color: 'bg-blue-100 text-blue-700' },
    { name: 'Сантехника', icon: 'Wrench', description: 'Трубы, фитинги, сантехника', color: 'bg-purple-100 text-purple-700' },
    { name: 'Краски', icon: 'Palette', description: 'Лакокрасочные материалы', color: 'bg-red-100 text-red-700' },
    { name: 'Скобяные изделия', icon: 'Hammer', description: 'Метизы и крепеж', color: 'bg-yellow-100 text-yellow-700' },
    { name: 'Электротовары', icon: 'Zap', description: 'Кабели, выключатели, розетки', color: 'bg-indigo-100 text-indigo-700' },
    { name: 'Электроинструменты', icon: 'Drill', description: 'Дрели, пилы, шуруповерты', color: 'bg-gray-100 text-gray-700' }
  ];

  const promotions = [
    { title: 'Скидка 15%', description: 'На все электроинструменты', badge: 'ХИТ' },
    { title: 'Акция 2+1', description: 'На бытовую химию', badge: 'НОВИНКА' },
    { title: 'Бесплатная доставка', description: 'При заказе от 3000₽', badge: 'ВЫГОДНО' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                <Icon name="Store" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Находка</h1>
                <p className="text-sm text-gray-600">Промышленные товары</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="text-gray-700 hover:text-orange-600 transition-colors">Каталог</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">О магазине</a>
              <a href="#delivery" className="text-gray-700 hover:text-orange-600 transition-colors">Доставка</a>
              <a href="#contacts" className="text-gray-700 hover:text-orange-600 transition-colors">Контакты</a>
              <a href="#promotions" className="text-gray-700 hover:text-orange-600 transition-colors">Акции</a>
            </nav>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6">Все для промышленности в одном месте</h2>
              <p className="text-xl mb-8 opacity-90">
                Широкий ассортимент качественных товаров: от хозтоваров до электроинструментов. 
                Быстрая доставка по всему городу.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Icon name="Search" size={20} className="mr-2" />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/881c6f09-3e01-44a4-82bd-00084ee8ed00.jpg" 
                alt="Промышленные товары" 
                className="rounded-2xl shadow-2xl animate-scale-in"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">5000+</p>
                    <p className="text-sm text-gray-600">товаров в наличии</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Категории товаров</h2>
            <p className="text-xl text-gray-600">Выберите нужную категорию из нашего широкого ассортимента</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon} size={32} />
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section id="promotions" className="py-20 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Акции и скидки</h2>
            <p className="text-xl text-gray-600">Выгодные предложения для наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-orange-600 text-white">{promo.badge}</Badge>
                    <Icon name="Gift" size={24} className="text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{promo.title}</CardTitle>
                  <CardDescription className="text-gray-600">{promo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О магазине Находка</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы работаем на рынке промышленных товаров уже более 10 лет. 
                Наша цель — обеспечить качественными товарами предприятия и частных клиентов.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">5000+</div>
                  <div className="text-sm text-gray-600">товаров</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">10+</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-orange-100 p-6 rounded-xl">
                  <Icon name="Clock" size={32} className="text-orange-600 mb-3" />
                  <h3 className="font-semibold mb-2">Быстрое обслуживание</h3>
                  <p className="text-sm text-gray-600">Обработка заказов в течение часа</p>
                </div>
                <div className="bg-green-100 p-6 rounded-xl">
                  <Icon name="Shield" size={32} className="text-green-600 mb-3" />
                  <h3 className="font-semibold mb-2">Гарантия качества</h3>
                  <p className="text-sm text-gray-600">Только проверенные поставщики</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-blue-100 p-6 rounded-xl">
                  <Icon name="Truck" size={32} className="text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Доставка по городу</h3>
                  <p className="text-sm text-gray-600">В течение 1-2 дней</p>
                </div>
                <div className="bg-purple-100 p-6 rounded-xl">
                  <Icon name="Headphones" size={32} className="text-purple-600 mb-3" />
                  <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
                  <p className="text-sm text-gray-600">Всегда готовы помочь</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Доставка и оплата</h2>
            <p className="text-xl text-gray-600">Удобные способы получения и оплаты товаров</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl mb-4">
                  <Icon name="Truck" size={28} className="mr-3 text-orange-600" />
                  Доставка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">По городу</h4>
                    <p className="text-gray-600">300₽ • 1-2 дня</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Store" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Самовывоз</h4>
                    <p className="text-gray-600">Бесплатно • В день заказа</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Gift" size={20} className="text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Бесплатная доставка</h4>
                    <p className="text-gray-600">При заказе от 3000₽</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl mb-4">
                  <Icon name="CreditCard" size={28} className="mr-3 text-green-600" />
                  Оплата
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Banknote" size={20} className="text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Наличными</h4>
                    <p className="text-gray-600">При получении товара</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CreditCard" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Картой онлайн</h4>
                    <p className="text-gray-600">Безопасная оплата</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Building" size={20} className="text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold">Безналичный расчет</h4>
                    <p className="text-gray-600">Для юридических лиц</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-gray-600 mb-2">+7 (800) 123-45-67</p>
              <p className="text-sm text-gray-500">Ежедневно 9:00 - 20:00</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">info@nahodka-shop.ru</p>
              <p className="text-sm text-gray-500">Ответим в течение часа</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-gray-600 mb-2">ул. Промышленная, 15</p>
              <p className="text-sm text-gray-500">Склад и офис продаж</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Icon name="Store" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Находка</h3>
              </div>
              <p className="text-gray-400">Промышленные товары для профессионалов и частных клиентов</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Хозтовары</li>
                <li>Электроинструменты</li>
                <li>Сантехника</li>
                <li>Краски</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (800) 123-45-67</p>
                <p>info@nahodka-shop.ru</p>
                <p>ул. Промышленная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Находка. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;