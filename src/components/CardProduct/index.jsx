const CardProduct = (props) => {
  const { srcImg, nameProduct } = props

  return <div class="container">
    
    <div className="row">

        <div className="col-3">
              <div class="card shadow-sm">
              <img src={srcImg} alt="#" />
                <div class="card-body">
                  <p class="card-text">{nameProduct}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    
                    <small class="text-muted"> Idol tiktok, Mr. {nameProduct}.</small>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card shadow-sm">
              <img src={srcImg} alt="#" />
                <div class="card-body">
                  <p class="card-text">{nameProduct}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    
                    <small class="text-muted"> Idol tiktok, Mr. {nameProduct}.</small>

                  </div>
                </div>
              </div>
            </div>
        
            
            
        </div>

        
  </div>
}

export default CardProduct
// {/* <img src={srcImg} alt="#" />
//     <h3>{nameProduct}</h3> */}