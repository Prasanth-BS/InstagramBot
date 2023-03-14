function captionSelector(tags, ArtHead, Artist) {
    if(tags.includes("#Character Modeling") || tags.includes("#Character Design")) {
        return `
                  ${ArtHead}
                  Great character by ${Artist}
                  Follow us @cg.nation_
                  .
                  .
                  .
                  .
                  .
                  .
                  .
                  .
                  #characterdesign #artstation #artstationHQ #fanart
                  #digitalpainting #charactermodeling #3dart #lightingart
                  #artdaily #aiart
               `;
    }

    else {
        return `Rate this art by ${Artist}`;
    }
    
    // tags.map(function (tag) {
    //   if (tag === "#Character Modeling" || tag === "#Character Design") {
    //     return `
    //               ${ArtHead}
    //               Great character by ${Artist}
    //               Follow us @cg.nation_
    //               .
    //               .
    //               .
    //               .
    //               .
    //               .
    //               .
    //               .
    //               #characterdesign #artstation #artstationHQ #fanart
    //               #digitalpainting #charactermodeling #3dart #lightingart
    //               #artdaily #aiart
    //            `;
    //   } else if (tag === "#Anime & Manga") {
    //     return `
    //               ${ArtHead}
    //               Great anime style art by ${Artist}
    //               Follow us @cg.nation_
    //               .
    //               .
    //               .
    //               .
    //               .
    //               .
    //               .
    //               .
    //               #characterdesign #artstation #artstationHQ #fanart
    //               #jpanart #animeedit #charactermodeling #anime #manga 
    //               #aot #animeboy #animeart #animegirl #cosplay
    //            `;
    //   } else if (tag === "#blender") {
    //     return `
    //               ${ArtHead}
    //               Created in blender by ${Artist}
    //               Follow us @cg.nation_
    //               .
    //               .
    //               .
    //               .
    //               .
    //               .
    //               .
    //               .
    //               #blender #blender3d #blendercommunity #artstation #artstationHQ
    //               #blendercycles #blenderguru #b3d #blenderart #3drender #3dartists
    //            `;
    //   } else if (tag === "#Concept Art" || tag === "#concept art") {
    //     //make sure change the statement once .toLower is implemented
    //     return `
    //             ${ArtHead}
    //             Great concept art by ${Artist}
    //             Follow us @cg.nation_
    //             .
    //             .
    //             .
    //             .
    //             .
    //             .
    //             .
    //             .
    //             #conceptart #artstation #artstationHQ
    //             #digitalpainting #charactermodeling #conceptartist #digitalart
    //             #colorstudy #illustration #illustrationartist #noai
    //            `;
    //   } else if (tag === "#Fantasy") {
    //     return `
    //             ${ArtHead}
    //             Great character by ${Artist}
    //             Follow us @cg.nation_
    //             .
    //             .
    //             .
    //             .
    //             .
    //             .
    //             .
    //             .
    //             #fantasyart #fantasyartist #fantasyillustration 
    //             #fantasypainting #fantasydrawing #digitalfantasy
    //             #fantasyworld #magicart #mythicalcreatures
    //             #fantasylandscape #fantasydesign #fantasyportrait
    //            `;
    //   } else if (tag === "#Game Art" || tag === "#game art") {
    //     return `${ArtHead}
    //           Great character by ${Artist}
    //           Follow us @cg.nation_
    //           .
    //           .
    //           .
    //           .
    //           .
    //           .
    //           .
    //           .
    //           #artstation #artstationHQ #digitalpainting
    //           #artdaily
    //           `;
    //   } else if (tag === "#Sketches" || tag === "#Portraits") {
    //     return `${ArtHead}
    //            Great character by ${Artist}
    //            Follow us @cg.nation_
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            #artstation #artstationHQ #digitalpainting
    //            #artdaily
    //            `;
    //   } else if (tag === "#Vehicles") {
    //     return `${ArtHead}
    //            Great character by ${Artist}
    //            Follow us @cg.nation_
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            #artstation #artstationHQ #digitalpainting
    //            #artdaily
    //            `;
    //   } else if (tag === "#Hard Surface") {
    //     return `${ArtHead}
    //            Great character by ${Artist}
    //            Follow us @cg.nation_
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            #artstation #artstationHQ #digitalpainting
    //            #artdaily
    //            `;
    //   } else if (tag === "#Science Fiction") {
    //     return `${ArtHead}
    //            Great character by ${Artist}
    //            Follow us @cg.nation_
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            #artstation #artstationHQ #digitalpainting
    //            #artdaily
    //            `;
    //   } else if (tag === "#noTags") {
    //     return `${ArtHead}
    //            Great character by ${Artist}
    //            Follow us @cg.nation_
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            .
    //            #artstation #artstationHQ #digitalpainting
    //            #artdaily #notags
    //            `;
    //   }
    // });
  }