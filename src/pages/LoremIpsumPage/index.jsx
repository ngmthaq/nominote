import { memo } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const LoremIpsumPage = () => {
  return (
    <div className={classes.stringHelperPage}>
      <PageHeading>Lorem Ipsum</PageHeading>
      <div className={classes.container}>
        <h2 className="mb-3">Lorem Ipsum</h2>
        <h4 className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <p>
          Quos accusantium dolor quas atque, pariatur provident adipisci eveniet veritatis perferendis architecto.
          Tenetur cumque animi quae accusamus nostrum eius aperiam repellendus sunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit repellat totam, ullam assumenda labore
          voluptas vitae aut porro. Fugit odio illo sint vel aperiam atque cum quod, ex quo laboriosam.
        </p>
        <p>
          Doloremque voluptatum dicta tempore a quidem nam tenetur accusantium. Esse officia ipsa repudiandae maiores
          enim delectus, totam earum nesciunt expedita, eligendi error.
        </p>
        <p>
          Aspernatur ratione natus error tenetur a, beatae delectus aliquam ea, eligendi quia nesciunt suscipit?
          Provident, pariatur. Incidunt officiis ad asperiores ipsa culpa?
        </p>
        <p>
          Amet incidunt iure harum cupiditate optio placeat sed porro, perspiciatis provident beatae perferendis nemo
          numquam nihil maxime molestias explicabo. Iusto, quae optio.
        </p>
        <p>
          Fugiat placeat maxime quae, perferendis eveniet consequatur sunt laudantium tempora ipsa odio laboriosam, ad
          delectus aliquid unde cum. Culpa delectus optio ipsam?
        </p>
        <p>
          Dignissimos consequatur facilis maxime quae ab architecto suscipit cum itaque laboriosam labore, ipsa
          corrupti, ad debitis voluptatem odio corporis repellat. Molestias, repellat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis neque ut eros accumsan, nec porttitor
          elit egestas. Mauris quis accumsan tellus. Quisque eu euismod urna, non ultrices tellus. Donec quis urna ut
          felis dignissim fermentum. Suspendisse lacinia nulla faucibus, blandit massa commodo, porttitor mi. Quisque
          feugiat lorem eros, non lobortis nisl mollis vel. Etiam rhoncus lorem id nisi placerat sodales. Aenean nec
          ornare ligula, vel bibendum turpis. Vivamus ut consectetur nisl, vel viverra dui.
        </p>
        <p>
          Cras eleifend vehicula est eget bibendum. Nullam egestas nisi condimentum est dictum, a imperdiet leo
          faucibus. Maecenas non vulputate nulla. Mauris in ultricies neque. Aenean vitae nisl urna. Nam sollicitudin,
          mauris et pulvinar rutrum, odio sem hendrerit dui, vel pretium magna mi eget dolor. Ut sodales lorem quis
          eleifend vestibulum. Aliquam semper hendrerit ipsum, eu vestibulum lacus sagittis in. Etiam nec porttitor
          nisl, sed condimentum elit. Nullam nulla turpis, vehicula sed nunc a, porttitor sagittis nulla. Etiam
          tincidunt augue vitae turpis lobortis sagittis. Phasellus faucibus eros nec nisi ullamcorper euismod. Mauris
          vehicula ligula in condimentum tincidunt. Morbi ultricies purus vitae pellentesque dictum.
        </p>
        <p>
          Sed est ipsum, tristique nec ante ac, rutrum bibendum nulla. Vestibulum mattis sem est, nec rhoncus nisi
          malesuada quis. Proin non semper sem, ac tempus mi. Proin id libero sagittis, vehicula justo sed, aliquet
          felis. Nullam nec neque in augue maximus imperdiet. Nam vestibulum diam ligula, ac aliquet neque hendrerit et.
          Sed id dignissim augue, nec tincidunt magna. Duis fermentum sodales quam. Phasellus ornare ex et vulputate
          ultrices. Aliquam euismod faucibus pellentesque. Sed posuere, arcu vel bibendum fringilla, nunc ex semper
          urna, in bibendum purus magna volutpat eros. In finibus rutrum lorem a imperdiet. Nullam facilisis orci elit,
          vel volutpat ex pellentesque eu. Nam faucibus mi ligula, nec fringilla odio dictum sed. Pellentesque sed quam
          eu enim luctus sollicitudin.
        </p>
        <p>
          Vestibulum justo purus, facilisis eu mi porta, faucibus rutrum nulla. Vestibulum vitae ullamcorper purus.
          Donec posuere, quam nec aliquam egestas, lectus turpis vulputate risus, quis viverra mi dolor ac mi. Curabitur
          dapibus ipsum in posuere faucibus. Pellentesque bibendum ornare mollis. Praesent ipsum turpis, tempor pharetra
          metus vitae, efficitur pharetra sem. In a sem elit. Suspendisse potenti. Aliquam nec sapien rutrum, tempus
          felis eu, egestas mi. In leo libero, dapibus id leo at, pharetra gravida erat. Vivamus condimentum neque nisl,
          vel luctus libero aliquam eu. Phasellus urna elit, eleifend nec commodo lacinia, consequat non magna.
          Vestibulum eu erat nisl.
        </p>
        <p>
          Suspendisse magna sapien, fringilla vitae pharetra vel, bibendum vitae ligula. Phasellus eleifend imperdiet
          consectetur. Nam sed augue turpis. Vestibulum condimentum metus et odio tempus, sit amet efficitur est
          pharetra. Etiam a sollicitudin nisl. Phasellus pellentesque venenatis porta. Fusce ligula nibh, ultrices
          egestas magna sed, vestibulum tempus est. Nunc lectus orci, porta sed diam eget, faucibus gravida augue. Donec
          massa quam, interdum id ornare ut, pellentesque ac odio.
        </p>
      </div>
    </div>
  );
};

export default memo(LoremIpsumPage);
