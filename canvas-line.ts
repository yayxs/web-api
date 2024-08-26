const canvas = document.getElementById('myCanvas') as HTMLCanvasElement

console.log(canvas)

const ctx: CanvasRenderingContext2D | null = canvas.getContext(
  '2d'
) as CanvasRenderingContext2D
ctx?.beginPath()
ctx?.moveTo(100, 100)
ctx?.lineTo(200, 200)
ctx?.lineTo(100, 200)
ctx.lineWidth = 3
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
ctx.setLineDash([15, 5])
ctx.stroke()
