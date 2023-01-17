import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../navbar"));
const Card = dynamic(() => import("./components/card"));

const singleBlog = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="w-full flex items-center justify-center h-[50vh]">
          <h1 className="text-5xl dark:text-white font-bold">
            Blogs
            <br />
            <br />
          </h1>
        </div>
        <div class="bg-white dark:bg-gray-800 w-full h-full min-h-[40vh] px-8 md:px-32 py-20">
          <div class="space-y-8">
            <img
              src="https://static.toiimg.com/photo/msid-95397427,width-96,height-65.cms"
              alt=""
              class="image w-full rounded-2xl shadow-2xl border border-white/20"
            />
            <h1 class="title text-4xl font-bold text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
            <p class="pb-12 description text-xl text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              ipsum laborum, nobis ad possimus quaerat commodi fuga cumque optio
              sequi sint fugit eum a sunt repudiandae voluptatibus eveniet
              aperiam autem voluptates molestias assumenda sapiente itaque!
              Dolorum vero voluptas nam mollitia commodi laudantium laborum? Ab
              sapiente recusandae cum magni soluta quia beatae iusto, voluptas
              asperiores provident nihil quidem eligendi ex. Quo recusandae
              facere itaque excepturi, eius molestias, rerum quidem esse quis
              incidunt aspernatur voluptate velit, quia dignissimos eum fuga
              saepe architecto error perspiciatis consequuntur distinctio
              repudiandae reprehenderit! Porro mollitia saepe facilis ducimus
              quas fuga facere molestiae, repellendus voluptatem fugiat iure
              necessitatibus, deserunt placeat amet blanditiis ea quam
              recusandae cum neque? Temporibus ipsam at maiores nemo labore
              dolor sed, cupiditate ipsum aliquam esse laudantium cumque alias
              doloribus natus? Voluptates, veniam necessitatibus sed
              voluptatibus culpa, non molestias autem maiores pariatur, nostrum
              praesentium aperiam explicabo ipsam est reprehenderit perspiciatis
              ex nihil at harum provident magni! Sequi corporis numquam
              consequuntur in ad itaque ab adipisci doloribus eius quos fuga
              voluptates beatae consequatur, quam molestias voluptatum repellat
              inventore sed cum sunt quas laudantium? Ipsum animi tenetur, fuga
              cumque atque laboriosam maxime placeat voluptas sit ab, repellat
              voluptatum iure porro dicta quam officiis corporis nisi quaerat
              voluptatem doloremque deleniti vel reiciendis! Reiciendis ipsum
              expedita error accusamus, facere, a dicta quis voluptas, quibusdam
              enim obcaecati rem? Aliquam rerum similique itaque! Ipsa ducimus
              aperiam velit, possimus consequuntur nobis, vel dolorem
              temporibus, enim nam labore accusamus corporis! Error voluptas vel
              nemo saepe nihil id qui incidunt doloremque at dolor! Mollitia
              reiciendis odio ut corporis quam reprehenderit sed, at, quisquam
              quae, iste delectus pariatur! Voluptatum voluptates veritatis iure
              modi soluta deserunt necessitatibus iste quod. Aperiam, sit eius!
              Vitae aperiam at nihil a sequi, magnam quidem laudantium tempora
              reiciendis provident corporis sunt eius numquam illo perferendis
              fuga. Cupiditate aliquid et hic veniam quas illum fugiat eius.
              Dolores, sunt dicta! Delectus debitis culpa illum aliquid expedita
              eos ullam iusto ab, illo voluptas libero accusamus sunt nihil quam
              voluptate tenetur magni fugit laboriosam sapiente quibusdam dicta
              corrupti ex vitae ipsum! Dolores voluptatem vero accusamus?
              Laudantium distinctio veniam quas illo optio culpa voluptatum
              laboriosam iusto quia, architecto cumque, magnam repellendus
              impedit recusandae minus ducimus? Ullam sapiente magni deleniti
              eum saepe inventore, voluptates commodi quo tempora itaque
              similique provident obcaecati architecto debitis aspernatur nisi
              necessitatibus distinctio velit maiores natus nihil, blanditiis
              eos expedita. Tempore, rem voluptatibus distinctio sequi, sit
              consectetur molestias beatae quam animi, rerum totam sapiente
              alias! Nihil rerum neque, dolorem inventore adipisci fugit modi
              voluptates beatae quae assumenda error incidunt, quisquam sunt
              fuga porro ipsam distinctio nulla eos magnam, praesentium in
              impedit. Temporibus rem pariatur ullam nulla quae soluta a quis
              cupiditate repellat consectetur ut facere aut modi excepturi,
              asperiores blanditiis magnam itaque et nam laudantium. Soluta
              vitae facilis ipsa impedit veritatis illo sunt deleniti, vero
              neque doloremque placeat, sed cum suscipit dignissimos ratione
              earum eum ea similique, ducimus error. Necessitatibus voluptatibus
              eveniet exercitationem quo! Ex incidunt minima in repellendus
              ipsam a, fugit quis sit quidem consequuntur eius velit, ipsum
              cupiditate amet cum porro nulla earum officiis inventore nisi.
              Dignissimos earum minus necessitatibus facilis iste eum, tenetur
              illum harum debitis quasi atque quo similique laboriosam? Ad porro
              iste minima nemo beatae voluptatum, reprehenderit maiores animi
              perferendis voluptatibus eum architecto, autem sapiente inventore
              sit, placeat harum soluta veniam dignissimos quam vitae! Fuga non
              deleniti harum accusantium eius ea adipisci dolorem, doloribus
              cupiditate dolorum. Voluptas similique exercitationem doloremque
              asperiores libero in, laborum qui ea blanditiis sequi iste aliquid
              sed, atque assumenda quibusdam maiores ipsum iure quisquam, nam
              odit labore! Distinctio, sapiente ut, inventore nam voluptatem sit
              dicta voluptate ea voluptatibus quam officiis ex alias quas labore
              possimus dolor rerum. Adipisci iste sequi dolore dolorem eum
              quibusdam optio, perferendis veniam enim nostrum! Tempora id ab
              odio ut amet qui eos error minus laborum obcaecati quidem, fuga
              perspiciatis sapiente nihil eius expedita corrupti recusandae
              numquam itaque iste. Labore quibusdam aliquid inventore eius. Iste
              dignissimos debitis error earum odio, itaque, modi aspernatur
              saepe beatae omnis consectetur eveniet cumque cupiditate deserunt
              repellat magni exercitationem quis amet nostrum officiis corrupti
              accusantium culpa. Porro alias, quia asperiores quam rerum
              distinctio ipsa necessitatibus qui deleniti voluptates ea
              molestias repellendus sed, maxime laborum commodi, omnis
              consequuntur error cumque neque delectus? Quod voluptas facilis
              autem dolore, inventore nisi maxime sapiente facere numquam nemo
              placeat officiis cumque velit, recusandae repellendus doloremque
              aliquam veritatis voluptate minus nulla illum. Voluptatum,
              explicabo quos unde odio iure accusantium molestiae eum aliquam
              perspiciatis ab quibusdam in, corrupti nam culpa cum cupiditate,
              incidunt odit. Id doloribus ipsa obcaecati nisi cumque est hic
              nesciunt corporis laudantium atque ullam, eaque modi fugit
              mollitia vero itaque cupiditate omnis voluptatum libero et
              necessitatibus minus, aliquam voluptas. Repudiandae ipsam soluta,
              quibusdam, facere error sit repellat adipisci nihil iusto enim
              dolorum excepturi odit exercitationem ullam delectus ipsa fugiat
              laboriosam, cupiditate sint illo voluptatibus iste beatae?
              Assumenda, doloribus ab minima ea delectus corporis exercitationem
              fugiat commodi tempore quaerat quisquam aliquid repellendus, illum
              consequuntur dolorum officiis adipisci dolor odio voluptate, quam
              nobis. Eum voluptatem unde velit distinctio nobis corporis, dolor
              autem recusandae provident illum praesentium, repellendus quaerat
              dicta est, animi ratione tempora? Fugit consequuntur maxime iusto
              rerum impedit corrupti sequi assumenda, nobis esse nemo at
              nostrum, facilis quod, distinctio adipisci deserunt aliquid cumque
              qui! Veniam aut facere voluptatum fuga a fugit nam minus ea
              suscipit aliquid quos deleniti, magnam sed autem? Beatae autem
              sint explicabo veritatis odit in maiores, dolorum eaque ducimus
              ipsa, aliquid iste, minus provident ea architecto saepe deleniti
              qui error eligendi totam doloribus ipsum voluptas. Accusantium
              nesciunt numquam non voluptatem necessitatibus voluptatum nihil
              obcaecati at enim? Iure similique et, pariatur cupiditate, quasi
              laboriosam totam quam autem reprehenderit facere officiis
              blanditiis aliquam maxime perspiciatis in. Quaerat rerum porro nam
              sed, quas iusto? Velit molestias aliquid officiis expedita
              laudantium consequatur eum omnis debitis quas, vel qui ratione
              tempore rem officia, dolorum porro voluptatem dolore nulla. Quia,
              dicta consectetur consequuntur necessitatibus cumque eius quis hic
              nulla enim modi ut blanditiis! Incidunt nam aliquid quae
              accusantium recusandae voluptate possimus eum modi, voluptatibus
              fuga eos repellendus, asperiores dolores. Maiores quidem labore
              inventore fugit quos nam illo recusandae autem enim voluptas
              dolor, minima unde maxime tempora repudiandae! Maiores illo,
              molestias quisquam fugiat hic eveniet quasi voluptatem iste
              placeat porro, odio voluptatum aperiam. Asperiores ea unde magni
              officia earum ducimus molestiae, aspernatur, voluptas odio, alias
              assumenda aliquid tempore quo harum autem veniam illum soluta modi
              beatae illo. Sit adipisci laboriosam temporibus. Maxime placeat
              temporibus nobis qui quam officia voluptatum incidunt in quidem
              blanditiis, tempore adipisci facere consectetur, itaque ratione.
              Quasi dolorum, non voluptatem esse aut asperiores pariatur, natus
              placeat ab velit id nisi fuga quos, qui et unde assumenda quae
              eius perspiciatis praesentium. Soluta sapiente sequi minus maiores
              voluptates autem eius itaque obcaecati rem illum, hic ratione
              laboriosam accusamus ipsam inventore consectetur. Quidem, amet
              doloremque nemo ut a quas accusantium praesentium, ea explicabo,
              vero similique voluptas cumque officiis incidunt deserunt et
              quibusdam omnis temporibus expedita nihil consequatur. Fugit optio
              quasi similique nostrum nemo vel officia! Tempore natus dolore
              quod placeat ducimus nobis soluta molestiae beatae laborum cumque
              sapiente blanditiis veritatis voluptas quisquam, iure numquam
              voluptatem earum, repellendus aliquam animi reprehenderit
              distinctio! Quia, impedit est, voluptatibus repellat tempora, quas
              fuga saepe itaque cumque aliquid numquam dolorum eaque cupiditate
              quo sunt animi aspernatur enim optio dolore ipsam! Laboriosam,
              eveniet similique totam asperiores esse odit praesentium eos qui
              animi facere est veritatis molestias, ullam consequatur deleniti
              minus fuga id at sit ipsam sint labore! Fugiat nihil, quo dolor
              corrupti non architecto, rerum dolores doloribus expedita
              voluptate sit hic atque similique vitae deserunt accusamus. Soluta
              nulla unde quos possimus, tempora a enim ullam officia repellat
              ipsum dolorem atque quisquam totam, iste explicabo, nobis
              voluptatum nisi quasi culpa et nam voluptate veniam neque sint?
              Repudiandae esse explicabo iste itaque in molestias. Deserunt et
              magni quia eius ullam! Atque, eveniet voluptas! Tempora numquam
              nam officiis veniam possimus, quidem voluptas error laboriosam
              sequi iusto quisquam corporis provident, esse nulla nisi quia
              aperiam. Inventore nihil incidunt, dolore est facilis possimus.
              Quo, corporis impedit! Id delectus ex velit ipsum iure pariatur
              asperiores dicta minima odit? Officia iste, illo sequi consectetur
              ullam, aliquid nemo libero labore quod ratione, illum veritatis
              harum hic reprehenderit quasi? Nam, a. Quaerat, consequuntur illum
              impedit culpa optio unde aliquid similique numquam sunt quod saepe
              enim blanditiis nulla! Nisi consectetur cumque nostrum quod soluta
              autem et incidunt veritatis alias architecto dolores cupiditate
              repellat dolore, commodi, ex doloremque ipsa corrupti, distinctio
              quia ipsam labore! Alias porro fuga eveniet dignissimos illo.
              Atque veritatis dolor eos optio similique hic molestias quia
              beatae inventore debitis. Maxime maiores fugit voluptas
              accusantium excepturi nisi, harum tenetur perferendis quam
              architecto! Amet, eum officia minus dignissimos consequuntur,
              omnis temporibus, unde beatae cum natus labore vel consectetur
              officiis. Facere aliquam illo voluptate! Deserunt quod odit
              mollitia iure atque iste tempora, hic repellendus eos dolorem aut.
              Minima beatae magnam quod doloribus culpa cupiditate! Obcaecati,
              harum voluptate nemo minus impedit est debitis voluptates dolorem
              dolor, id accusantium a! Incidunt, ipsa doloribus. Itaque
              laudantium nulla dolorem? Veritatis, illum quos? Voluptatem cumque
              consequuntur pariatur reprehenderit laboriosam. Quae autem velit
              dolorum qui, magni beatae.
            </p>
            <a
              class="rounded-full bg-gradient-to-r hover:bg-gradient-to-l from-indigo-600 to-cyan-600 px-8 py-4 text-md font-medium text-white shadow dark:hover:bg-indigo-500"
              href="/"
            >
              Download code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleBlog;
