package outboundprocessor

import (
	"fmt"
	"sync"
	"time"

	"github.com/rs/zerolog"
)

type Processor struct {
	outboundStartTime  map[string]time.Time
	outboundEndTime    map[string]time.Time
	outboundActive     map[string]struct{}
	mu                 sync.Mutex
	Logger             zerolog.Logger
	numActiveProcessor int64
}

func NewProcessor(logger zerolog.Logger) *Processor {
	return &Processor{
		outboundStartTime:  make(map[string]time.Time),
		outboundEndTime:    make(map[string]time.Time),
		outboundActive:     make(map[string]struct{}),
		mu:                 sync.Mutex{},
		Logger:             logger.With().Str("module", "OutboundProcessorManager").Logger(),
		numActiveProcessor: 0,
	}
}

func (p *Processor) StartTryProcess(outboundID string) {
	p.mu.Lock()
	defer p.mu.Unlock()
	p.outboundStartTime[outboundID] = time.Now()
	p.outboundActive[outboundID] = struct{}{}
	p.numActiveProcessor++
	p.Logger.Info().Msgf("StartTryProcess %s, numActiveProcessor %d", outboundID, p.numActiveProcessor)
}

func (p *Processor) EndTryProcess(outboundID string) {
	p.mu.Lock()
	defer p.mu.Unlock()
	p.outboundEndTime[outboundID] = time.Now()
	delete(p.outboundActive, outboundID)
	p.numActiveProcessor--
	p.Logger.Info().
		Msgf("EndTryProcess %s, numActiveProcessor %d, time elapsed %s", outboundID, p.numActiveProcessor, time.Since(p.outboundStartTime[outboundID]))
}

func (p *Processor) IsOutboundActive(outboundID string) bool {
	p.mu.Lock()
	defer p.mu.Unlock()
	_, found := p.outboundActive[outboundID]
	return found
}

func (p *Processor) TimeInTryProcess(outboundID string) time.Duration {
	p.mu.Lock()
	defer p.mu.Unlock()
	if _, found := p.outboundActive[outboundID]; found {
		return time.Since(p.outboundStartTime[outboundID])
	}
	return 0
}

// ToOutboundID returns the outbound ID for OutboundProcessorManager to track
func ToOutboundID(index string, receiverChainID int64, nonce uint64) string {
	return fmt.Sprintf("%s-%d-%d", index, receiverChainID, nonce)
}
