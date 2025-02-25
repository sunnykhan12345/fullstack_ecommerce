import React, { useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const ProductDetails = () => {
  const [selectsize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisable, setIsButtonDisable] = useState(false);

  const selectProduct = [
    {
      name: "Stylish Jacket",
      price: 120,
      originalPrice: 150,
      description: "This is a stylish jacket perfect for any occasion",
      brand: "FashionBrand",
      material: "Leather",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Black"],
      images: [
        {
          url: "https://img.drz.lazcdn.com/static/pk/p/eb32ff3fee644942ac29f2f5fc8f504b.jpg_400x400q75.jpg_.webp",
          altText: "Stylish Jacket Front",
        },
        {
          url: "https://img.drz.lazcdn.com/static/pk/p/02ee34592804be83d3472bf7b8871b2b.png_400x400q75.png_.webp",
          altText: "Stylish Jacket Back",
        },
      ],
    },
  ];

  const similarProducts = [
    {
      _id: 1,
      name: "product 1",
      price: 100,
      images: [
        {
          url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAOxAAAgECBAMEBwYGAgMAAAAAAQIAAxEEEiExBUFRE2FxkSIyVIGhwdEUQlKSseEGIzRTgqIkckPw8f/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEABQb/xAAlEQACAwABBAICAwEAAAAAAAAAAQIDESESMUFRE1IEQqGxwSL/2gAMAwEAAhEDEQA/AHgQwLwRDBnn/IWqsIDrDAgiGILsGKogWMAkWMVbxbsGxqKVY6kzIdAD4reRFjlpxUrkh6qDGJq/26f5BBevVPJB3hRGrSEhpRXzIP4jG+ZjdiSe8xZFvxe6bHpxLJYQ1cgXUKStUT1KtRPCWcbiRtianvguIphGqaYt14NbHYkjWsTEviq7G5qt7jAYQDDUkKcGEcVX/uH3mCcVXvcubxbQTD6kLcWNOLrf3DKiZU3UB0ssGGDM4aMVpI7C9UmgGGDEq0apEXK0aqRyx1OJQiaaYEnncNVQ6ms1U0iqQ2m/D08xksrW3hssigUpE8pZpd07GFwJcax9bh2Vdo6NFko9RE/yoqWHmnp90y1FnZxWHyk3vObVS14nrcXyV1yU0c+osQ811RMr7yiF2hOoQ0BobRLGUK0W6SjAJkZotmjVYLdJeYSRRaSH1g/CJV41XnGXjGC9oX8pjV4zgfaF/KZPKFno9BOr7I7StHIZxk41gPaU8jNFPjfDva08jJ5Qs9MYnV9kdmnNdKcWnx3hvtdPyM10uO8N0/5lPyMnnXb6ZzlDwzuUBOrgl1E85Q49w32yn5To4fj/AA7li6UCFck+UR3JyWI9pgiFC3mms6lbA6zy9D+I+H2/rKUc/wDEOAC/1dMe6exX+YoV9B5EvxLXLcHY9bsbTiYhTrrCxP8AEHD21+205y6/HuHG/wDzKZ855dsXN6kejRCUVjCrAzJUETX47w0b41Pj9Jiq8d4b7Yn5TAjVZ6Z6MZRzlmp7zO5mOpxzhnta/lMzvxrhvtS/kMpjXZ6CcqvaNztFM857cZ4d7V/oYluNcP8Aav8ARvpKIwn6AcqvsjpF9ZJyTxnh9/6r/RvpJGdE/QHXT9keUzN1MsE9TCyS7AcwJ7+I+T6mQMephBj1MG46iGMvMge+ZiCU2Grt1MYtUjm3viQVPMQgpOxMBxQyNkkakrvzJmininA0LTCqkbxqb66RUq16KYXzXk7OCrO7gBje4vznRx9UoFPanUaAAicrhNOo7+gwF9Bdm18gZ1eJKwpZahLHeyjN8p51kIqzserVdLo5ZwauLqZiMze+Znrv+IwsQpz7Hwmdrnkwl8K452PMtvnr5I1Vm3i2ZjKNhuzCQWvcMI5QRNK1vuwGY94gEk7xrC//AKJWTxh4Kc2IN+sGx6/CPIglBzMJAaxNj1lRhy9R5y5pmsYALCURc6Wlg6cwPCWLHmfKYYQLbkDJl12Ahi3Im3cZVkv6x995xpYTuhLTuecgAHNvO0MMbmx08YLDQSjLpe0clM31uRblEqTfQkHxm/Br2lg69pbcXsYqbxD6lrN/CqdJ3CLVFMnU3U/KdStg2pU7VMrIdzsfiDEcP+xpVAr08VQtqb0yy25chNlWthqhZaWLXLsEzAfAgTzbG+vT0odsPL46iiVCA1rfdAuPO0wkW+9OrxDMTmy+l3KPlOY5OYqym/W1vnL6nsSG9f8AQllU7EX56ysoOmvheG29gvPqIBzjlKESsE0+gMHLYaiHr3CUSR90X8ZoDFkdxlbfejN+QgMo/DNMK0PMSpWnT4iScYRLADTXxjcysdA2294Ja23TmZYqE9CfCccghpzb3mEpI5Off+8HMwFytv8AqJa1kNlKeJKiYEg8xJ1D36fvDRzsVY/5/WJBplrgL+URyutrZlHhbeCw0MXM21M+YmigTTcOaWo55gIlFfcPcd2t/KbMLUOde0qohuOmgv43iJvjCmtcnoeHcXxLsqfYhUU6alGsTtuReb8RiKVZM1ShTQsuqvUKkc+8ec5mG+1ZQUehUVTcg4inZhz0Z9NNduc2Ymg7gvS7EBzawqMuvMAK3ynnSitL125OHxDKT/LKnkP5zG/mJxnRmFyD8DOzxHDGkSDWfQbI9RgPhOO6Gws9Sx5sp0+EupfBJf37GdlXmR71gi410I6XhutUHnr3afGV6fMAjn6A0lKI2KcNexW3haBYW9LOPE/vNIRgBlFrnlAtUzbG3hCBaEZgLWPx+sIkbC4/yv8AOGyNc6H33gGgx3VlM0Aq4/G/mPrJK7Ajd28zJNOKWkqi+X4mNWw5Ed2sydonJSI+kGYaVbeMwxDbqDrkv0NxDzAWJFO3QRfZVORDdwEoU6itYoB4aGYHg8AMNaSgdbEfKRaaE2FOmegB/eINRqZ9VweQvb4x1LEqbdoCDfkQYLDjnkdTFIOAVCne62+s34dipADZr7Dskb4GYUfB1WBqVFJY+lnTRZ1MJw/heIdVGKWi29yyD4HnJ7JJLkqqi/B2MLjaVDDE4nDYV1qesxpCmT/kGBjsRjMHi6YNDh+IG1zQqK2++5I5fvDwXBKVSkaa47NdrEUnS9/EDfvisdwiqKNQYTFY6kAbOKtVSD3g7yLYN9yznDDXq03YutLiKki1qjJ5fCcbEVWZSqpXNtGzW3jeIYDE4dyKnEWdQCfSLHbvsZz6yVDUs+JSoW9Y3bf6yuqK9kts36AavVX1aduhP/yKNYswzUVOlr5jLKF1seyJvbRjBaiP7YNu6VLCSWkzp96nvta8B3QC11HQZiJfYI33QCOsA0X2QhvDb9YXAt6Aa9AA66/9zKGKpCwu7C2o13l9nXVgtlt4wXSr+FT+n6TeAeRgrpbQn3D9pJnyVOQQ/wCX7STcR2sYHUixZrHkwvKIRhZEpMffL7AMdKj26jQSzhRYEm4v3EzgNCWiqt63usfnDVmpg+nYcrj9oNNci2FRwO8G3lGgqujVPR6Aiw8zBYaA7RSFuyXt+Ej5RiVOQzN3JYfrCK0zcq9JgdL5iPlvAFPCggMMKx6sReCGtD7UrYGmzc9xNOF4olGouVqlPK1xnW4HkLiIzpTBWlh6ZHMJ9dvjG0salK5OApVLaEG+nlAmk0Ng2n3OxT4u1JQtN0q0wLfyKeb4FhH1f4ppK6eiGAGtqRzA9LFh15GYV4zh6NFewwB1uWpDOF23BF5oT+KFLvm4R2uZvWuTlHv398k+Lf1/ks+TP2FVeN1cU5FFkpIo/wDIBqNBprMWIxdZq5DHMTrcOczW6jeaq+JoVjSqLwm1RrlnqKGDD37c5hqMzerhaQW/qq2h+HwMbCOdlgqUuOXoipUrkAE5Bt6WvymWo1YgABepGU2/SaXr12OXslF/u35ecHtqlirUl8SR9TKFwTSMLPWKnL2YB0PIGEKldQBlXxuZsaobm4JOm9j84DG7H7t92AN/HaHotoT2mJtclR4Ayu0q32VvAm8I+i117QAnlf6SZm1FnsOZ0mg6B2w9mPnLlGoejfmEk4wQtGpsxNuikgjylrSYXuTccr7wTY6BiTyuZHpNbRQe/WEAGqpvnueYNTN84X8sWNkJvYAA3EQEYnRibDa4gKqFibnx1mHabywUgsEI2NxLL07HQ9wABH6TEHpfjAt0NiJavZxmYHnqDMaGKR1O3pJTy9kxXQ+iMp+E20cRgKVRTRrkUqg9IMpDJ4HUTk06qPYdm9QkXKhbeWhjw+Hp3D4OkSCNahsQD8te6JlEphPD0VLifDCSlKtnd1CmkBmBA5i17c9oWJq8MrKvaUKrYhRey0GBPTkLzk4XEMWth8NhspBHpWBY9Mzc+6dGlXasSDUwdEFrZrJkBtrtfzuNzJZQSe/6WRn1LH/QmvQrWZ8NQxCIPRIqJcXAFgb6DnvORi62PUEvhaSg2trp56zs1xjMzUadao1m9Bmq06VwOeUi/TxnMxtHiNMMlQI5PpXaoDew5WG0bUxNyfjTEa2IYlmoUQLesCdffA+0uASRTXSwVlaRxjzcs62troLDWIZsQBZq6g7WvKkiJsclesbkPTy32vL7bO93C6abCZitR7k4ka95JMBlewC1S1h0Jm4BrN3ai+qohvzYiVmpMLGso7hb6TAVN7MXDnklIyr2NuzqHvK6/CbhnV7NpWkTpUon/NjJMnbAaCi5tz9I/KScZpsWgmUC2hiGpJ2Ze2okknHFIoqBcw0IvYQ6mUKQUVrD72sqScwgWKlQci+Gsim9Vaa2UXGwEkkwzyNxV6NQqDmBB9YcumkWMZUJWmFphRoAFkknNcBxb0z9qzsFNtRvDoYiqzlQ2W2l1385JJzRmvSNja9IsFdiW3Ysb/r+sdRxNekyKtU5SbkWAv5SpIGIOLZtw1Zq6VbgKoYego0O+94FSplqKiogBG9pJJyDbeCsTUNNahQAZbbc/Gcz7XVqGzWsTykkhrsJkNofzNwo15KIutWemAoIIB5j6SSTQDKaxYklEJ8JJJJx2H//2Q==",
        },
      ],
    },
    {
      _id: 2,
      name: "product 2",
      price: 100,
      images: [
        {
          url: "data:image/jpeg;base64,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",
        },
      ],
    },
    {
      _id: 3,
      name: "product 3",
      price: 100,
      images: [
        {
          url: "data:image/jpeg;base64,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",
        },
      ],
    },
    {
      _id: 4,
      name: "product 4",
      price: 100,
      images: [
        {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucAoNkpvyT9rYeiyW7PvE3bj8bC01HiZGgw&s",
        },
      ],
    },
  ];

  const handleAddToggle = () => {
    if (!selectsize || !selectColor) {
      toast.error("Please select size and color before adding to cart", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisable(true);

    setTimeout(() => {
      toast.success("Product added to cart", {
        duration: 1000,
      });
      setIsButtonDisable(false);
    }, 1000);
  };

  const [mainImage, setMainImage] = useState(selectProduct[0].images[0].url);

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct[0].images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                } hover:border-black`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main product"
                className="w-full h-auto object-cover rounded-lg border border-gray-200"
              />
            </div>
          </div>
          {/* Mobile Thumbnails */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectProduct[0].images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                } hover:border-black`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectProduct[0]?.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              ${selectProduct[0]?.originalPrice}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              $ {selectProduct[0]?.price}
            </p>
            <p className="text-gray-600 mb-4">
              {selectProduct[0]?.description}
            </p>
            {/* Colors */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct[0]?.colors.map((color) => (
                  <button
                    onClick={() => setSelectColor(color)}
                    key={color}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${
                      selectColor === color
                        ? "border-4  border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.8)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            {/* Sizes */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct[0]?.sizes.map((size) => (
                  <button
                    onClick={() => setSelectSize(size)}
                    key={size}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300 rounded border ${
                      selectsize === size ? "bg-black text-white" : "bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* quanuty */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  className="bg-white hover:opacity-65 border border-gray-400 px-2 py-0.5 rounded cursor-pointer"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-white border hover:opacity-65 border-gray-400 px-2 py-0.5 rounded cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToggle}
              disabled={isButtonDisable}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 transition-all duration-300 hover:opacity-80 cursor-pointer
                 ${
                   isButtonDisable
                     ? "cursor-not-allowed opacity-50"
                     : " hover:bg-gray-900"
                 }`}
            >
              {isButtonDisable ? "Adding..." : "ADD TO CART"}
            </button>
            {/* Product Characteristics */}
            <div className="mt-6 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectProduct[0]?.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectProduct[0]?.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid product={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
